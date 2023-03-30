import { useEffect, useState } from "react";
import "./App.css";
import { Input, Messages } from "./Components";
import { randomColor, randomName } from "./helpers/generatorFunctions";

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const drone = new window.Scaledrone("x4HWGT5WcslMpLUg", {
      data: member,
    });
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      member.id = drone.clientId;
      setMember(member);
    });
    const room = drone.subscribe("observable-room");
    room.on("message", (message) => {
      setMessages((prevState) => [...prevState, message]);
    });
    setDrone(drone);
  }, []);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="App">
      <h1>Algebra Chat App</h1>
      <Messages messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
}

export default App;
