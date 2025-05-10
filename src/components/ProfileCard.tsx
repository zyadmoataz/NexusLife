import Image from "next/image";


export default function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-8">
        {/* Image Container */}
        <div className="relative h-20 w-full">
            <Image src="https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            <Image src="https://images.pexels.com/photos/17984670/pexels-photo-17984670/free-photo-of-model-in-a-white-blouse-and-gray-long-skirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={56} height={56} className="rounded-full object-cover w-14 h-14 absolute  left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"/>
        </div>
        <div className="h-20 flex flex-col items-center gap-2">
            <span className="font-semibold ">Sara Adams</span>
            <div className="flex items-center gap-4">
                <div className="flex">
                    <Image src="https://images.pexels.com/photos/17984670/pexels-photo-17984670/free-photo-of-model-in-a-white-blouse-and-gray-long-skirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3 "/>
                    <Image src="https://images.pexels.com/photos/17984670/pexels-photo-17984670/free-photo-of-model-in-a-white-blouse-and-gray-long-skirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3 "/>
                    <Image src="https://images.pexels.com/photos/17984670/pexels-photo-17984670/free-photo-of-model-in-a-white-blouse-and-gray-long-skirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3 "/>
                </div>
                <span className="text-xs text-gray-500">500 Followers</span>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md text-xs">My Profile</button>
        </div>
    </div>
  )
}
