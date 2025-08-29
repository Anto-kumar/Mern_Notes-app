import React, { useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd, MdCreate } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

import { data } from "react-router-dom";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShow: false,
    type: "add",
    data: null,
  });

  const handleOnEdit = () => {
    // Handle edit action
  };

  const handleOnDelete = () => {
    // Handle delete action
  };

  const handleOnPinNote = () => {
    // Handle pin note action
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NoteCard
            title={"Note 1"}
            date={"2023-03-15"}
            content={"This is the content of note 1."}
            tag={"#personal"}
            isPinned={false}
          />
          <NoteCard
            title={"Note 2"}
            date={"2023-03-16"}
            content={"This is the content of note 2."}
            tag={"#work"}
            isPinned={true}
            onEdit={handleOnEdit}
            onDelete={handleOnDelete}
            onPinNote={handleOnPinNote}
          />
          <NoteCard
            title={"Note 3"}
            date={"2023-03-17"}
            content={"This is the content of note 3."}
            tag={"#shopping"}
            isPinned={false}
            onEdit={handleOnEdit}
            onDelete={handleOnDelete}
            onPinNote={handleOnPinNote}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition-all ease-in-out absolute right-10 bottom-10"
        onClick={() =>
          setOpenAddEditModal({ isShow: true, type: "add", data: null })
        }
      >
        <MdCreate className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShow}
        onRequestClose={() =>
          setOpenAddEditModal({ ...openAddEditModal, isShow: false })
        }
        style={{ overlay: { backgroundColor: "rgba(0, 100, 100, 0.2)" } }}
        contentLabel="Add/Edit Note"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes  
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onClose={()=>{
          setOpenAddEditModal({ ...openAddEditModal, isShow: false })
        }}/>
      </Modal>
    </>
  );
};

export default Home;
