import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    console.log(inputValue);
    console.log(tags);
    if (inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
            >
              #{tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <MdClose className="inline-block ml-1 cursor-pointer" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="Add tags"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="h-10 w-10 flex items-center justify-center bg-slate-200 rounded hover:bg-slate-300 transition-all ease-in-out"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-black hover:text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
