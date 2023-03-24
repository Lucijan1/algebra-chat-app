import { useState } from "react";

export default function Input(prop) {
  const [messageText, setMessageText] = useState("");

  const handleInput = (e) => setMessageText(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    setMessageText("");
    prop.handleSendMessage(messageText);
  };

  return (
    <form onSubmit={handleForm}>
      <input
        onChange={handleInput}
        value={messageText}
        placeholder="Send a message"
        autoFocus={true}
        type="text"
      />
      <button>&#9166;</button>
    </form>
  );
}
