import { nanoid } from "nanoid";
function Messages({ messages, currentMember }) {
  const renderMessage = (message) => {
    const { member, text } = message;
    console.log("message:", message);
    console.log("member:", member);
    const localUserMessage = member && member.id === currentMember.id;
    const className = localUserMessage
      ? "Messages-message currentMember"
      : "messages-message";
    return (
      <li key={nanoid()} className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="MessageContent">
          <div className="username">{member.clientData.username}</div>
          <div
            className="text"
            style={{ backgroundColor: member.clientData.color }}
          >
            {text}
          </div>
        </div>
      </li>
    );
  };
  return (
    <ul className="Messages-list">{messages.map((m) => renderMessage(m))}</ul>
  );
}

export default Messages;
