import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Contact from "../model/Contact";
import { v4 as uuidv4 } from "uuid";

type initialStateType = {
  contactList: Contact[];
};

const contactList: Contact[] = [
  {
    id: uuidv4(),
    name: "Vitora",
    email: "vitoria@gmail.com",
    telephone: "(51)997934446",
    nascimento: "13/10/2022",
    empresa: "uniritter"
  },
  {
    id: uuidv4(),
    name: "Maike",
    email: "maike@gmail.com",
    telephone: "(51)997934446",
    nascimento: "13/10/2022",
    empresa: "movese"
  },
  {
    id: uuidv4(),
    name: "Zorbe",
    email: "zorbe@gmail.com",
    telephone: "(51)997934446",
    nascimento: "13/10/2022",
    empresa: "zorbe"
  },
  {
    id: uuidv4(),
    name: "Maurício",
    email: "mau@hotmail.com",
    telephone: "(51)997934446",
    nascimento: "13/10/2022",
    empresa: "lasalle"
  },
  {
    id: uuidv4(),
    name: "Pedrinho",
    email: "pedrinho@gmail.com",
    telephone: "(51)997934446",
    nascimento: "13/10/2022",
    empresa: "unisinos"
  },
  {
    id: uuidv4(),
    name: "Joao",
    email: "joao@gmail.com",
    telephone: "(51)997934446",
    nascimento: "30/06/1996",
    empresa: "fiane"
  },
  {
    id: uuidv4(),
    name: "Rafael",
    email: "rafael@gmail.com",
    telephone: "(51)997934446",
    nascimento: "30/06/1996",
    empresa: "lasalle"
  },
  {
    id: uuidv4(),
    name: "Pedreiro",
    email: "pedreiro@gmail.com",
    telephone: "(51)997934446",
    nascimento: "30/06/1996",
    empresa: "pedreiro"
  },
  {
    id: uuidv4(),
    name: "Vionata",
    email: "dionata@hotmail.com",
    telephone: "(51)997934446",
    nascimento: "13/10/2022",
    empresa: "muck"
  },
  {
    id: uuidv4(),
    name: "Valerai",
    email: "valerai@gmail.com",
    telephone: "(51)997934446",
    nascimento: "13/10/2022",
    empresa: "record"
  } 
];

const initialState: initialStateType = {
  contactList,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contactList.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const {
        payload: { id, name, email, telephone, nascimento, empresa },
      } = action;

      state.contactList = state.contactList.map((contact) =>
        contact.id === id ? { ...contact, name, email, telephone, nascimento, empresa } : contact
      );
    },
    removeContact: (state, action: PayloadAction<{ id: string }>) => {
      state.contactList = state.contactList.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, updateContact, removeContact } =
  contactSlice.actions;
export const getContactList = (state: RootState) => state.contact.contactList;

export default contactSlice.reducer;
