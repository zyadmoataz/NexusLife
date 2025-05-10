import Image from "next/image";
import Link from "next/link";



export default function Birthdays() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
        {/* Top */}
        <div className="flex items-center justify-between font-medium">
            <span className="text-gray-500">Birthdays</span>
        </div>
        {/* User */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/7980486/pexels-photo-7980486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={40} height={40} alt="" className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Bross Wayne</span>
            </div>
            <div className="flex gap-3 justify-end">
                <button className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Celebrate</button>
            </div>
        </div>
        {/* Upcoming */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image src="/gift.png" width={24} height={24} alt=""/>
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
                    <span className="text-gray-500">See other 16 have  upcoming birthdays</span>
                </Link>                 
        </div>
    </div>
  )
}
