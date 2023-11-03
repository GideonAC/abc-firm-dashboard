import React from "react";
import { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import Modal from "../backdrop/Modal";

const User = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="user">
      <div className="name">
        <h5 className="p-user">Welcome Shakirat</h5>
        <p className="upload-text">
          Upload your audio and Video to convert to text
        </p>
      </div>

      <div className="transcribe">
        <button className="transcribe-btn" onClick={openModal}>
          Transcribe File
        </button>
      </div>

      {modalIsOpen && <Backdrop onClick={closeModal} />}
      {modalIsOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default User;
