import Image from "next/image";


export default function AddPost() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image src="https://images.pexels.com/photos/31737010/pexels-photo-31737010/free-photo-of-person-walking-on-coastal-boardwalk-in-wintertime.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={48} height={48} alt="" className="w-12 h-12 rounded-full object-cover"/>
      {/* Post | we made flex 1 to fit all the container*/}
      <div className="flex-1">
        {/* Text Input */}
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind" className="flex-1 p-2 bg-slate-100 rounded-lg"></textarea>
          {/* align that emoji at the end */}
          <Image src="/emoji.png" width={20} height={20} alt="" className="w-5 h-5 cursor-pointer self-end"/>
        </div>
        {/* Post Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" width={20} height={20} alt=""/>
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" width={20} height={20} alt=""/>
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" width={20} height={20} alt=""/>
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" width={20} height={20} alt=""/>
            Event
          </div>
        </div>
      </div>
    </div>
  )
}
