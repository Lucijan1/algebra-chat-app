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
  const [onlineMembers, setOnlineMembers] = useState([]);

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

    room.on("members", (currentMembers) => {
      setOnlineMembers([...currentMembers]);
      console.log("Currently online members:", currentMembers);
      console.table("state: ", onlineMembers);
    });

    room.on("member_join", (member) => {
      const joinedMember = onlineMembers.push(member);
      setOnlineMembers(joinedMember);
      console.log("Joined: ", member);
      console.table("State: ", onlineMembers);
    });

    room.on("member_leave", (memberLeft) => {
      const currentMembers = onlineMembers;
      const index = currentMembers.findIndex(
        (member) => member.id === memberLeft.id
      );
      currentMembers.splice(index, 1);
      setOnlineMembers(currentMembers);
      console.log("left: ", memberLeft);
      console.table("state: ", onlineMembers);
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
