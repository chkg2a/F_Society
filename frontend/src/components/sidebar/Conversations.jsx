import Conversation from "./Conversation"
import useGetConvsersations from "../../hooks/useGetConversations"

const Conversations = () => {
  const {conversations}= useGetConvsersations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default Conversations
