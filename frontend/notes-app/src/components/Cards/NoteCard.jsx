import React from "react";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tag,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  

  return (
    <div className="oorder rounded p-4 bg-amber-50 hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div className="">
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${
            isPinned ? "text-yellow-500" : "text-slate-400"
          } cursor-pointer hover:text-yellow-500`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-600 mt-2 ">{content.slice(0, 100)}...</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-blue-500 font-medium">{tag}</div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
