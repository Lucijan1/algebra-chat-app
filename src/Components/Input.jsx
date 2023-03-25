import { useState } from "react";

function Input({ onSendMessage }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText({
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText({ text: "" });
    onSendMessage(inputText);
  };
  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your message"
          autoFocus={true}
        />
        <button>&#9166;</button>
      </form>
    </div>
  );
}

export default Input;
