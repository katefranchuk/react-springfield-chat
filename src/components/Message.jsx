import { useAuth } from "../hooks/useAuth";

const Message = ({ message }) => {
  const { currentUser } = useAuth();
  return (
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              className="object-contain"
              src={message.avatar}
              alt={message.name}
            />
          </div>
        </div>
        <div className="chat-header flex items-center gap-x-2">
          <span>{message.name}</span>
          <time className="text-xs opacity-50">
            {message.createdAt?.toDate().toLocaleTimeString("en-US")}
          </time>
        </div>

        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
