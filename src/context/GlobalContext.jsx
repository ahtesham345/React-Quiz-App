import React, { createContext, useState } from "react";

const GlobalContext = createContext();

export default GlobalContext;

export const GlobalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <GlobalContext.Provider
      value={{ openModal, setOpenModal, email, setEmail, onCloseModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
