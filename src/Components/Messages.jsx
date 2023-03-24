function Messages({ message, currentMember }) {
  function renderMessage(message) {
    const { text } = message;
    const { color, username } = currentMember;

    return (
      <li key={Math.random()}>
        <span className="avatar" style={{ backgroundColor: color }} />
        <div className="Message-content">
          <div className="username">{username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  return (
    <ul className="Messages-list">{message.map((m) => renderMessage(m))}</ul>
  );
}

export default Messages;
