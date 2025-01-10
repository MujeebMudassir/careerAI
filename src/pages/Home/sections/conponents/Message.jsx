import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
const Message = ({ message, sender = false, receiver = false }) => {
  return (
    <div
      className={`message-bg mb-5 text-sm  rounded-[18px] ${
        sender ? "self-start" : "self-end"
      } min-w-[50%] p-2 `}
    >
      <p className={`flex flex-row items-center  gap-1 ${sender ? "text-left justify-start " : "text-right justify-end"}`}>
        {message}
        {sender && (
          <>
            <div className="border-[1px] h-[15px] w-[15px] flex justify-center items-center rounded-[5px] border-[#E5FE73]">
              <IoIosTrendingUp color="#E5FE73" size={10} className="inline-block" />
            </div>
            {"today"}
          </>
        )}
      </p>
    </div>
  );
};

export default Message;
