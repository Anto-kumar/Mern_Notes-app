import React,{useState} from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({noteData, type, onClose}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const addNote =  async() => {}

  const editNote = async() => {}

  const handleAddNote = () =>
  {
    if(!title.trim() || !content.trim())
    {
      setError("Title and content are required.");
      return;
    }

    if(type=="edit")
    {
      editNote();
    }
    if(type=="add") {
      addNote();
    }

    // Handle adding the note
    setError(null);
  }

  return (
    <div className="relative">
      <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50" onClick={onClose}>
        <MdClose className="text-slate-500 hover:text-slate-700"/> 
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none bg-slate-50 "
          placeholder="Go To At Gym"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Write your content here..."
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      <button className="btn mt-5 font-medium p-3" onClick={handleAddNote}>ADD NOTE</button>
    </div>
  );
};

export default AddEditNotes;
