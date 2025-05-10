import Image from "next/image";

export default function Stories() {
  return (
    // we cannot remove that scrollbar from tailwind so we will add a class name
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-sm scrollbar-hide">
      {/* make the story take the maximum width */}
      <div className="flex gap-8 w-max">
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer ">
          <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
          <span className="font-medium">Ricky</span>
        </div>
          {/* Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer ">
            <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80} />
            <span className="font-medium">Ricky</span>
          </div>
      </div>
    </div>
  )
}
