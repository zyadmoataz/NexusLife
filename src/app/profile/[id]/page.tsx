// we will have a dynamic user

import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import Ad from './../../../components/Ad';



export default function ProfilePage() {
  return (
  <div className='flex gap-6 pt-6'>
    {/* Left */}
    <div className="hidden xl:block w-[20%]">
      <LeftMenu type="profile"/>
    </div>
    {/* Center */}
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center flex-col">
           {/* Image Container */}
            <div className="relative h-64 w-full">
                <Image src="https://images.pexels.com/photos/16747471/pexels-photo-16747471/free-photo-of-sheds-in-tropical-forest-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
                {/* bootm is half the height */}
                <Image src="https://images.pexels.com/photos/30886914/pexels-photo-30886914/free-photo-of-portrait-of-woman-by-the-sea-in-dark-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={128} height={128} className="rounded-full object-cover w-32 h-32 absolute  left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"/>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Sara Adams</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.3K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
        </div>
        <Feed/>
      </div>
    </div>
    {/* Right */}
    <div className="hidden lg:block w-[30%]">
      <RightMenu userId="test"/>
    </div>
  </div>
  )
}
