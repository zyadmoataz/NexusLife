import Image from "next/image";


export default function Comments() {
  return (
    <div className="">
        {/* Write */}
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/31649569/pexels-photo-31649569/free-photo-of-elegant-woman-holding-cat-in-minimalist-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={32} height={32} className="w-8 h-8 rounded-full object-cover"/>
            <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full flex-1">
                <input type="text" className="bg-transparent outline-none flex-1" placeholder="Write a comment..." />
                <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
            </div>
        </div>
        {/* Comments */}
        <div className="">
            {/* Comment */}
            <div className="flex justify-between gap-4  mt-6">
                {/* Avatar */}
                <Image src="https://images.pexels.com/photos/31649569/pexels-photo-31649569/free-photo-of-elegant-woman-holding-cat-in-minimalist-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                {/* Description */}
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">John Doe</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est ipsam nam itaque, consectetur iusto sapiente doloribus sint unde velit eum iure necessitatibus quis. Perspiciatis suscipit ducimus repellat neque qui.</p>
                <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                    <div className="flex items-center gap-4">
                        <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-4 h-4"/>
                        <span className="text-gray-300"> | </span>
                        <span className="text-gray-500">123 Likes</span>
                    </div>
                    <div className="">Reply</div>
                </div>
                </div>
                {/* Icon */}
                <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"/>
            </div>
        </div>
    </div>
  )
}
