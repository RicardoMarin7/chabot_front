import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { Button } from "../Button";
import { fetchChatResponse } from "../../services/chat.service";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};


const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "¡Hola! ¿En qué puedo ayudarte?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true)

    try {
      const {response} = await fetchChatResponse(input)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: response, sender: "bot" },
      ]);
    } catch (error: unknown) {
      console.log(error)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: `Lo siento, hubo un error al enviar el mensaje `, sender: "bot" },
      ]);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="lg:w-[80vw] w-[100] flex flex-col h-[90vh] bg-theme-gradient  p-4">
      <div className="flex-1 overflow-auto space-y-2">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 h-16 rounded-lg overflow-clip shadow-sm border border-gray-200 outline-none"
          onKeyDownCapture={(e) => {
            if(e.key === "Enter"){
              sendMessage()
            }
          }}
          placeholder="Escribe un mensaje..."
        />
        <Button
          disabled={loading}
          parenthMethod={sendMessage}          
        >
          Enviar Mensaje
        </Button>
      </div>
    </div>
  );
};

export default Chat;