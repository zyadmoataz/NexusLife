// this is to protect our routes
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// add our protected routes and this "(.*)" means protect anything inside this folder
const isProtectedRoutes = createRouteMatcher(["/settings(.*)"]);


// clerkMiddleware check the authorization of our requests
// ex: we shouldnt see settings page if we are not authorized
// we will check our route and if its protected we will use clerk protect method
// to do that we will check the user authentivation and user request
export default clerkMiddleware((auth, req)=>{    
    // if the url that the user visit is in the protected route > check the authentication > and if the user is not authenticated protect this route
    if(isProtectedRoutes(req)) auth().protect()
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  };