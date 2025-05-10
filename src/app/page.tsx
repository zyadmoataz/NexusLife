// we will create our authentication using clerk > it will be easier to pass the user info when we fetch or update the data and also we can protect our routes
// if we are not authenticated we wont be able to see the homepage so that we will use next js middleware
// in middleware we will write our authentication rule and protect our routes
// when we make a request to see one of the pages > middleware will check if we are authenticated or not > if not we will be directed to the homepage
// we will create the middleware using the auth

import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Stories from "@/components/Stories"

// when we create a new user we should get the notification from clerk and we can do this using react hooks
const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      {/* Left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home"/>
      </div>
      {/* Center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories/>
          <AddPost/>
          <Feed/>
        </div>
      </div>
      {/* Right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu/>
      </div>
    </div>
  )
}

export default Homepage