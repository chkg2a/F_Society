import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F161%2F161887.png&f=1&nofb=1&ipt=e8c5775a311f2e04668eaf8e67ecb54c9036bbd2c11d8080ee2c76712913b094&ipo=images"}
            alt="avatar ui"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is up?
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
        12:42
      </div>
    </div>
  );
};

export default Message;
