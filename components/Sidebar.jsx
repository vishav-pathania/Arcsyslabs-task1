

const Sidebar = () => {
    return (
        <div className="bg-[#181818] p-10 mt-20 max-w-lg flex flex-col items-center rounded-[10px]">
            <div>
                <p className=" font-body font-normal text-white text-[26px] text-opacity-70">ALL YOUR CHATS</p>
                <button className="bg-primary flex items-center justify-center font-header font-semibold text-lg mt-[30px] text-[#050505] rounded-[10px] py-[21px] w-full">
                    <img src="/Chat.svg" alt="" className="mr-[6px]" />
                    <span>
                        Chat Images: ON
                    </span>
                </button>
                <p className="mt-5 text-white font-regular font-body text-opacity-70">When a bot sends you images, you will be charged one secondary image</p>
            </div>
        </div>
    )
}

export default Sidebar