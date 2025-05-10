import Image from "next/image";
import Comments from "./Comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
        {/* User */}
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/14996832/pexels-photo-14996832/free-photo-of-smiling-woman-in-white-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-medium">Ricky Santos</span>
            </div>
            <Image src="/more.png" alt="" width={16} height={16}/>
        </div>
        {/* Description */}
        <div className="flex flex-col gap-4">
            {/* Image | image will fit in that div then we dont have to write width and height if we are using the parent div just say fill*/}
            <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/31090535/pexels-photo-31090535/free-photo-of-rustic-western-style-wooden-saloon-front.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt=""className=" object-cover rounded-md"/>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga est ut illo enim, voluptatem sit repellat aspernatur sunt laborum, quo distinctio quibusdam tempore, ad rerum magnam excepturi qui expedita?</p>
        </div>
        {/* Interaction */}
        <div className="flex items-center justify-between text-sm my-4">
            {/* Left Side */}
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline ">Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline ">Comments</span></span>
                </div>
            </div>
            {/* Right Side */}
            <div className="">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline ">Shares</span></span>
                </div>
            </div>
        </div>

        <Comments />
    </div>
  )
}
