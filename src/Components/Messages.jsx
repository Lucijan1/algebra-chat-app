import "./Messages.css";
function Messages({ messages, currentMember }) {
  const renderMessage = (message) => {
    //TODO: Format timestamp and render it properly
    const { member, data, timestamp } = message;
    const localUserMessage = member && member.id === currentMember.id;
    const className = localUserMessage
      ? "Messages-message currentMember"
      : "Messages-message";
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (
      <li key={timestamp} className={className}>
        <div
          className="MessageContent"
          style={{ backgroundColor: member.clientData.color + "40" }}
        >
          <div
            className="username"
            style={{ backgroundColor: member.clientData.color + "40" }}
          >
            {member.clientData.username}
          </div>
          <div className="text">{data}</div>

          <div className="timestamp">{`${hours}:${minutes}`}</div>
        </div>
      </li>
    );
  };
  return (
    <ul className="Messages-list">{messages.map((m) => renderMessage(m))}</ul>
  );
}

export { Messages };
