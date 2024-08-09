
import './ChatBox.scss'
const ChatBox = ({
    message,
    alwaysTrue
}) => {
    const randomFlag = alwaysTrue || Math.random() >= 0.5;
    return (
        <div className={`chatboxContainer ${!randomFlag && 'meBox'}`}>
            <div className={`chat-box ternary-font-bright ${randomFlag ? 'them' : 'me'}`}>{message}</div>
        </div>
    )
}

export default ChatBox