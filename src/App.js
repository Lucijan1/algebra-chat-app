import { Messages } from "./Components";
import "./App.css";
import { useState } from "react";
import { randomName, randomColor } from "./utilities/generators";
import Input from "./Components/Input";

function App() {
  const [messages, setMessages] = useState([
    {
      text: "This is a message",
    },
  ]);

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

  const onHandleSendMessage = (message) => {
    messages.text = message;
  };

  return (
    <div className="App">
      <Messages message={messages} currentMember={member} />
      <Input handleSendMessage={onHandleSendMessage} />
    </div>
  );
}

export default App;
