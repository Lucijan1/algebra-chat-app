export default function Messages(){
    const {messages} = this.prop;



    const renderMessage= (message)=>{

        const {member, text} = message;
        const {currentMember}=  this.props;
        const messageFromMe = member.id === currentMember.id;
        const className= messageFromMe? "Messages-message currentMember": "Messages-message";

        return(
            <li className={className}>
                <span className="avatar" stype={{backgroundColor: member.clientData.color}}/>
                <div className="Message-content">
                    <div className="username">
                        {member.clientData.username}
                    </div>
                    <div className="text">{text}</div>
                </div>
            </li>
        )


    }
    return (
        <ul className="Messages-list">
          {messages.map(message=>renderMessage(message))}  
        </ul>
    )
}