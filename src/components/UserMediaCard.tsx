import Image from "next/image";
import Link from "next/link";


export default function UserMediaCard({userId}:{userId?:string}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
        {/* Top */}
        <div className="flex items-center justify-between font-medium">
            <span className="text-gray-500">User Media</span>
            <Link href="/" className="text-blue-500 text-xs">See all</Link>
        </div>
        {/* Bottom */}
        <div className="flex gap-4 justify-between flex-wrap">
            {/* we uesed the width to be divied on 5 not 4 as we have gap 4 so this means 20% of the component */}
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
            <div className={`relative w-1/5 h-24 `}>
                <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover"/>
            </div>
        </div>
    </div>
  )
}
