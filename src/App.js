import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Messages from "./Components/Messages";

function App() {
  function randomName() {
    const adjectives = [
      "autumn",
      "hidden",
      "bitter",
      "misty",
      "silent",
      "empty",
      "dry",
      "dark",
      "summer",
      "icy",
      "delicate",
      "quiet",
      "white",
      "cool",
      "spring",
      "winter",
      "patient",
      "twilight",
      "dawn",
      "crimson",
      "wispy",
      "weathered",
      "blue",
      "billowing",
      "broken",
      "cold",
      "damp",
      "falling",
      "frosty",
      "green",
      "long",
      "late",
      "lingering",
      "bold",
      "little",
      "morning",
      "muddy",
      "old",
      "red",
      "rough",
      "still",
      "small",
      "sparkling",
      "throbbing",
      "shy",
      "wandering",
      "withered",
      "wild",
      "black",
      "young",
      "holy",
      "solitary",
      "fragrant",
      "aged",
      "snowy",
      "proud",
      "floral",
      "restless",
      "divine",
      "polished",
      "ancient",
      "purple",
      "lively",
      "nameless",
    ];
    const nouns = [
      "waterfall",
      "river",
      "breeze",
      "moon",
      "rain",
      "wind",
      "sea",
      "morning",
      "snow",
      "lake",
      "sunset",
      "pine",
      "shadow",
      "leaf",
      "dawn",
      "glitter",
      "forest",
      "hill",
      "cloud",
      "meadow",
      "sun",
      "glade",
      "bird",
      "brook",
      "butterfly",
      "bush",
      "dew",
      "dust",
      "field",
      "fire",
      "flower",
      "firefly",
      "feather",
      "grass",
      "haze",
      "mountain",
      "night",
      "pond",
      "darkness",
      "snowflake",
      "silence",
      "sound",
      "sky",
      "shape",
      "surf",
      "thunder",
      "violet",
      "water",
      "wildflower",
      "wave",
      "water",
      "resonance",
      "sun",
      "wood",
      "dream",
      "cherry",
      "tree",
      "fog",
      "frost",
      "voice",
      "paper",
      "frog",
      "smoke",
      "star",
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }

  function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }
  const [messages, setMessages] = useState([]);

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const newDrone = new window.Scaledrone("zcEs1VEhyhQWLxhJ", {
      data: member,
    });
    setDrone(newDrone);
  }, []);

  useEffect(() => {
    if (drone) {
      drone.on("open", (e) => {
        if (e) {
          console.error(e);
        } else {
          member.id = drone.clientId;
          setMember(member);
          const newRoom = drone.subscribe("learning");
          setRoom(newRoom);

          newRoom.on("data", (data, member) => {
            const newMessage = { member, text: data };
            setMessages((messages) => [...messages, newMessage]);
          });
        }
      });
    }
  }, [drone]);

  const onSendMessage = (message) => {
    drone.publish({
      room: "learning",
      message,
    });
  };

  return (
    <div className="App">
      <Messages messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
}

export default App;
