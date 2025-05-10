import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Ad from "./Ad";

export default function LeftMenu({type}:{type:"home" | "profile"}) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard/>}
      <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2 text-sm text-gray-500">
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/posts.png" width={20} height={20} alt=""/>
          <span className="">My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/activity.png" width={20} height={20} alt=""/>
          <span className="">Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/market.png" width={20} height={20} alt=""/>
          <span className="">Market Place</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/posts.png" width={20} height={20} alt=""/>
          <span className="">Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/albums.png" width={20} height={20} alt=""/>
          <span className="">Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/videos.png" width={20} height={20} alt=""/>
          <span className="">Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/news.png" width={20} height={20} alt=""/>
          <span className="">News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/courses.png" width={20} height={20} alt=""/>
          <span className="">Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/news.png" width={20} height={20} alt=""/>
          <span className="">News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/lists.png" width={20} height={20} alt=""/>
          <span className="">Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="/" className="flex items-center gap-4 p-2 ronded-lg hover:bg-slate-100">
          <Image src="/settings.png" width={20} height={20} alt=""/>
          <span className="">Settings</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  )
}
