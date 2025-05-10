
// we will get the type of the page as a prop as on each page the right side will change

import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

// if there is user id this means that we are on the profile page so we will show the information and media and disbale them if we have no id
export default function RightMenu({userId}:{userId?:string}) {
  return (
    <div className="flex flex-col gap-6">
      {/* if there is user id show card if no show nothing | and pass the user id to them to get the user data*/}
      {userId?(
        <>
          <UserInfoCard userId={userId}/>
          <UserMediaCard userId={userId}/>
        </>
      ):null}
      <FriendRequests/>
      <Birthdays/>
      <Ad size="md"/>
    </div>
  )
}
