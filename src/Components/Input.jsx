import { useState } from "react";
import "./Input.css";

function Input({ onSendMessage }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(inputText);
    setInputText("");
  };
  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputText}
          type="text"
          placeholder="Enter your message"
          autoFocus={true}
        />
        <button>&#9166;</button>
      </form>
    </div>
  );
}

export { Input };
