export default function Messages(){
    const {messages} = this.prop;
    const renderMessage= (message)=>{
        const {member, text} = message;
        const {currentMember}=  this.props;
        const messageFromMe = member.id === currentMember.id;
        const className= messageFromMe? "Messages-message currentMember": "Messages-message";

        return(
            <li className={className}>

            </li>
        )


    }
    return (
        <ul className="Messages-list">
          {messages.map(message=>renderMessage(message))}  
        </ul>
    )
}