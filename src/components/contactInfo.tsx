import * as React from "react";
import {
  BsFillPenFill,
  BsFillTrashFill,
  BsFillCalendar3WeekFill,
  BsReplyAllFill,
  BsShareFill,
  BsMailbox2,
  BsTelephoneFill,
  BsFilePerson,
} from "react-icons/bs";
import Contact from "../model/Contact";
import { useAppDispatch } from "../app/hooks";
import { removeContact } from "../app/contactSlice";


interface ContactProps {
  contact: Contact;
  onContactUpdate: (id: string) => void;
}

const ContactInfo: React.FC<ContactProps> = (props) => {
  const dispatch = useAppDispatch();
  const contact = props.contact;

  const setUpdatePage = (id: string) => {
    props.onContactUpdate(id);
  };

  return (
    <div className="bg-gray-800">
      <div className="flex flex-col pb-4 overflow-auto">
        <div
          className="relative flex flex-col items-start p-3 mt-4 bg-gray-700 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
          draggable="true"
        >
          <button
            className="absolute top-0 right-0  items-center justify-center  w-5 h-5 mt-3 mr-2 text-blue-600 rounded hover:bg-blue-600 hover:text-blue-600 group-hover:flex"
            onClick={() => setUpdatePage(contact.id)}
          >
            <BsFillPenFill />
          </button>
          <button
            className="absolute top-7 right-0  items-center justify-center  w-5 h-5 mt-3 mr-2 text-blue-600 rounded hover:bg-blue-600 hover:text-blue-600 group-hover:flex"
            onClick={() => dispatch(removeContact({ id: contact.id }))} 
          >
            <BsFillTrashFill />
          </button>

          <div className="rounded-md pl-6 text-sm font-medium text-white">
            <div className="flex items-center w-full mt-3 ">
              <div className="flex items-center">
                <BsFilePerson />
                <span className="ml-1 leading-none">{contact.name}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-white">
              <div className="flex items-center">
                <BsTelephoneFill />
                <span className="ml-1 leading-none">{contact.telephone}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-white">
              <div className="flex items-center">
                <BsMailbox2 />
                <span className="ml-1 leading-none">{contact.email}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-white">
              <div className="flex items-center">
                <BsMailbox2 />
                <span className="ml-1 leading-none">{contact.nascimento}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-white">
              <div className="flex items-center">
                <BsMailbox2 />
                <span className="ml-1 leading-none">{contact.empresa}</span>
              </div>
            </div>

             </div>
                <button
                 className="absolute top-20 right-5 items-center justify-center w-5 h-10 mt-7 mr-2 text-blue-600"

                 //"flex items-center ustify-center  text-blue-600 p-2 rounded text-sm w-auto"
                  >
                   <span>Ligar</span>
                 </button>
              </div>
        </div>
      </div>
  );
};

export default ContactInfo;
