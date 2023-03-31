import "./OnlineMembers.css";

function OnlineMembers({ onlineMembers, currentMember }) {
  const renderMembers = (member) => {
    const { id } = member;
    const { username, color } = member.clientData;
    const localUser = id === currentMember.id;
    const className = localUser ? "OnlineMember _current" : "OnlineMember";
    return (
      <li
        key={id}
        className={className}
        style={{
          color: color,
          borderBottomColor: color,
        }}
      >
        {username}
      </li>
    );
  };
  return (
    <ul className="OnlineMembers">
      {onlineMembers.map((m) => renderMembers(m))}
    </ul>
  );
}
export { OnlineMembers };
