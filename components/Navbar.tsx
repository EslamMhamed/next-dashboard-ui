import Image from "next/image"

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 ">
        {/* Search bar */}
        <div className=" hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
            <Image src='/search.png' alt="search" width={14} height={14} />
            <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search.." />
        </div>
        {/* Icons and users */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white h-7 w-7 rounded-full items-center justify-center flex cursor-pointer">
                <Image src='/message.png' alt="message" width={20} height={20} />
            </div>
            <div className="bg-white h-7 w-7 rounded-full items-center justify-center flex cursor-pointer relative">
                <Image src='/announcement.png' alt="message" width={20} height={20} />
                <div className="absolute -top-3 -right-3 h-5 w-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">1</div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Eslam Mohamed</span>
                <span className="text-gray-500 text-right text-[10px]">Admin</span>
            </div>
            <Image src='/avatar.png' width={36} height={36} className="rounded-full" alt="avatar" />
        </div>

    </div>
  )
}

export default Navbar