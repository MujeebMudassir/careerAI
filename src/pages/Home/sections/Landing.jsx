import React, { useEffect, useRef, useState } from "react";
import avatar from "../../../assets/yolo.png";
import "./styles/Landing.css";
import { CiCircleMore } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import Message from "./conponents/Message.jsx";
const Landing = () => {
    const [messages, setMessages] = useState([
        { message: "Hi! How can I help you?", sender: true },
        { message: "Hi!", receiver: true },
        { message: "Hi! How are you?", sender: true },
        { message: "May I know your name?", sender: true },
        { message: "Aakash Dave", receiver: true },
        { message: "Hi! Aakash, Please tell me something about you.", sender: true },
      ]);
    
      const [newMessage, setNewMessage] = useState("");
      const [isSender, setIsSender] = useState(false);
      const handleAddMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
          setMessages([...messages, { message: newMessage, sender: isSender, receiver: !isSender }]);
          setNewMessage(""); 
        }
      };
      const chatContainerRef = useRef(null); 

      useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, [messages]);
  return (
    <div className="bg-[#171616] relative text-white overflow-hidden">
      <div className="dot1"></div>
      <div className="dot2"></div>
      <div className="dot3"></div>
      <div className="max-w-[1300px] m-auto h-[100vh] p-[5%]">
        <div className="flex justify-between mb-2">
          <p className="text-xs">
            <FaRegMessage
              size={18}
              color={"#E5FE73"}
              className="inline-block mr-3"
            ></FaRegMessage>
            BrainAI
          </p>
          <div>
            <button className="text-xs">Sigh in</button>{" "}
            <button className="text-xs text-[#E5FE73] ml-5 border-[1px] p-1 rounded-[10px] border-[#E5FE73]">
              Train me
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 h-[90%] md:h-[100%]">
          <div className="w-[100%] h-[90%] md:h-[100%] hidden md:flex glassBlur rounded-3xl  flex-col justify-end overflow-hidden">
            <img src={avatar} alt="avatar" className="object-contain" />
          </div>
          <div className="w-[100%] glassBlur rounded-3xl overflow-hidden">
            <div className="h-[100%] relative pt-20">
              <div className="absolute w-[100%] top-0 left-0 flex justify-between items-center p-5 topBar-bg">

                <div className="flex items-center gap-5">
                <img
                  src={avatar}
                  alt="profile-pic"
                  className=" h-8 w-8 rounded-full overflow-hidden object-cover"
                />
                <p className="text-sm">CareerAI</p>
                </div>
               
                <CiCircleMore size={30} color="#fff" />
              </div>
              <div className="p-4 flex flex-col h-full overflow-hidden  justify-end">
                <div ref={chatContainerRef}  className="flex flex-col overflow-y-auto custom-scrollbar">
                  {messages.map((msg, index) => (
                    <Message
                      key={index}
                      message={msg.message}
                      sender={msg.sender}
                      receiver={msg.receiver}
                    />
                  ))}
                </div>

                <div className="flex justify-between gap-5 mb-[5px] ">
                  <div className="p-[5px] orangeglass cursor-pointer rounded-[10px] flex-1 text-[8px] md:text-xs  border-[1px]  border-[#F4AC72]">
                    Suggest career options?
                  </div>
                  <div className="p-[5px] tealglass cursor-pointer rounded-[10px] text-[8px] md:text-xs border-[1px]  border-[#0DB27F]">
                    Suggest few new career-oriented events?
                  </div>
                </div>
                <form action="" onSubmit={handleAddMessage}>
                <div className="p-2 w-[100%] glassBlur rounded-[18px] flex flex-row justify-between items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full bg-transparent  placeholder-white outline-none"
                    placeholder="Ask your query ..."
                  />
                  <IoSend  className="cursor-pointer" onClick={handleAddMessage} size={20} />
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <p className="text-[10px] md:text-xs">Copyright & Developed By BrainAI &copy; 2025</p>
          <div className="cursor-pointer">
            <button className="underline  text-[10px] md:text-xs mr-5">Terms</button>
            <button className="underline  text-[10px] md:text-xs">Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
