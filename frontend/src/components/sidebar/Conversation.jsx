
const Conversation = () => {
  return (
  <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online ">
          <div className='w-12 rounded-full'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F162%2F162023.png&f=1&nofb=1&ipt=44dc0d36d31f2763832b4e2cf0109f8bca93682934edbac1cbef0f9a2bee659c&ipo=images" alt="user avatar"/>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">❤️</span>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1'/>
  </>
  )
}

export default Conversation
