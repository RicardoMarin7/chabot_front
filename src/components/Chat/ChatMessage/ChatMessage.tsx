type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};


const ChatMessage = ({ text, sender }: Message) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg shadow ${
          isUser ? "bg-theme-color-700 text-white" : "bg-secondary-color-300 text-secondary-900"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;