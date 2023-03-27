function Messages({ messages, currentMember }) {
  const renderMessage = (message) => {
    const { member, data } = message;
    console.log("message:", message);
    console.log("member:", member);
    const localUserMessage = member && member.id === currentMember.id;
    const className = localUserMessage
      ? "Messages-message currentMember"
      : "messages-message";
    return (
      <li key={member.id} className={className}>
        <div
          className="MessageContent"
          style={{ backgroundColor: member.clientData.color }}
        >
          <div className="username">{member.clientData.username}</div>
          <div
            className="text"
            style={{ backgroundColor: member.clientData.color }}
          >
            {data}
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
