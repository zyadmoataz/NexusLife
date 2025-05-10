// This need a prop as we have 2 types of ads 

import Image from "next/image";

// small for the left side, medium for the right side, large for the post
export default function Ad({size}:{size:"sm" | "md" | "lg"}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md lex-col gap-4">
      {/* Top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="">Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16}/>
      </div>
      {/* Bottom */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2":"gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24": size === "md" ? "h-36": "h-48"}`}>
          <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-lg object-cover"/>
        </div>
        <div className="flex items-center gap-4">
          <Image src="https://images.pexels.com/photos/15924270/pexels-photo-15924270/free-photo-of-cups-with-cappuccinos-on-wooden-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={24} height={24} className="rounded-full h-6 w-6"/>
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={`${size==="sm" ? "text-xs": "text-sm"}`}>
          {size==="sm"? " Lorem, ipsum dolor sit amet consectetur adipisicing elit. ":size==="md"?"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi error maiores quia rem consectetur deleniti nisi laborum, ad et mollitia nostrum minus dolore voluptas nemo ex deserunt in perferendis!":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi error maiores quia rem consectetur deleniti nisi laborum, ad et mollitia nostrum minus dolore voluptas nemo ex deserunt in perferendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi error maiores quia rem consectetur deleniti nisi laborum, ad et mollitia nostrum minus dolore voluptas nemo ex deserunt in perferendis!"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 rounded-lg text-xs">Learn More</button>
      </div>
    </div>
  )
}
