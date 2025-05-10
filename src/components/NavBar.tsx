import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


export default function NavBar() {
  return (
    <div className="h-24 flex items-center justify-between">
        {/* Left */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/">
                <Image src="/logo.png" width={100} height={100} alt="logo" className="w-40 h-18"/>
            </Link>
        </div>
        {/* Center */}
        {/* This is hidden in small screens */}
        <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
          {/* Links */}
          <div className="flex gap-6 text-gray-600">
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/home.png" alt="Homepage" width={16} height={16} className="h-4 w-4"/> 
              <span>Homepage</span>
            </Link>
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/friends.png" alt="Friends" width={16} height={16} className="h-4 w-4"/> 
              <span>Friends</span>
            </Link>
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/stories.png" alt="Stories" width={16} height={16} className="h-4 w-4"/> 
              <span>Stories</span>
            </Link>
          </div>
          <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
            <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
            <Image src="/search.png" alt="" width={14} height={14}/>
          </div>
        </div>
        {/* Right */}
        <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
            {/* we have 3 states 1- loading 2-authenticated 3-unauthenticated */}
            <ClerkLoading>
              <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <div className="cursor-pointer">
                  <Image src="/people.png" alt="" width={24} height={24} />
                </div>
                <div className="cursor-pointer">
                  <Image src="/messages.png" alt="" width={20} height={20} />
                </div>
                <div className="cursor-pointer">
                  <Image src="/notifications.png" alt="" width={20} height={20} />
                </div>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <div className="flex items-center gap-2 text-sm">
                  <Image src="/login.png" alt="" width={20} height={20} />
                  <Link href="/sign-in">Login/Register</Link>
                </div>
              </SignedOut>
            </ClerkLoaded>
            {/* this need a user interaction to open the menu so this should be a client component */}
            <MobileMenu/>
        </div>
    </div>
  )
}
