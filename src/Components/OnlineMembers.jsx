function OnlineMembers({ onlineMembers }) {
  const renderMembers = (member) => {
    const { id } = member;
    const { username } = member.clientData;
    return (
      <li key={id} className="OnlineMember">
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
