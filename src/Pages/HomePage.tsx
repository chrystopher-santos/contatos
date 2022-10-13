import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useAppSelector } from "../app/hooks";
import Contact from "../model/Contact";

import ContactList from "../components/contactList";
import NewContact from "../components/NewContact";
import DialogBox from "../components/DialogBox";
import { BsPlusCircleFill } from "react-icons/bs";

const HomePage: React.FC = (props) => {
  let [open, setOpen] = useState(false);
  const getContactList = useAppSelector((state) => state.contact.contactList);

  const [searchTerm, setSearchTerm] = useState("");
  const [contactListData, setContactListData] = useState<Contact[]>();

  useEffect(() => {
    setContactListData(getContactList);
    const filteredData = getContactList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setContactListData(filteredData);
  }, [getContactList, searchTerm]);
  const DialogHandle = () => {
    setOpen((current) => !current);
  };
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gray-800">
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-gray-900 bg-opacity-75">
        <Link to="/">
          <BsFillTelephoneFill className="w-6 h-6 text-blue-600 stroke-current" />{" "}
        </Link>
        <input
          className="flex items-start h-10 px-3 ml-10 text-sm w-1/3  bg-gray-700 rounded-full focus:outline-none focus:ring"
          type="search"
          placeholder="🔍 Buscar"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button
          type="submit"
          className="flex items-center text-blue-600 p-15 rounded text-sm w-auto"
          onClick={DialogHandle}
        >
          <span>&nbsp;&nbsp;</span><BsPlusCircleFill />
          <span>&nbsp;Adicionar Contato</span>
        </button>
      </div>
      <ContactList contacts={contactListData} />
      {open && (
        <DialogBox open={open} OnDialogHandle={DialogHandle}>
          <NewContact id={""} />
        </DialogBox>
      )}
    </div>
  );
};

export default HomePage;
