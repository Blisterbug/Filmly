import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MobileSignIn from '../components/MobileSignIn'

const SignIn = ({


}) => {

    return (
        <> 
        <div className="hidden sm:block">
        <div className="grid grid-rows-1 z-auto">
            <div>
            <div className='pt-2 bg-black/20'><Link to="/" className='mt-4 text-2xl'> <i className="fas fa-chevron-left m-1"></i>Go to home page</Link></div>
                <div
                    className="relative bg-gray-100 text-black shadow flex items-center border-none overflow-hidden w-full h-full"
                // style={{ width: "1300px", height: "580px" }}
                >
                    {/* Image */}
                    <img
                        src="../netflix.jpg"
                        alt="Image"
                        className="h-full w-full object-fill shadow-lg "
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/60 to-transparent text-white flex flex-col justify-center items-center p-6  space-y-4">

                        <div className="container w-[700px] h-[850px] grid  bg-transparent/75">

                            <div className="text-4xl font-bold pl-24 pt-20"><h1>Sign In</h1></div>

                            <div className="grid justify-center "><input type="email" placeholder="Email or mobile number" className="w-[500px] h-[58px] rounded-xl px-4 font-semibold text-black"  /></div>

                            <div className="grid justify-center"><input type="password" placeholder="Password" className="w-[500px] h-[58px] rounded-xl px-4 font-semibold text-black" /></div>

                            <div className="grid justify-center"><button type="submit" className="w-[500px] h-[50px] rounded-xl px-2 font-semibold text-xl bg-purple text-white ">Sign In</button></div>

                            <div className="grid justify-center">OR</div>

                            <div className="grid justify-center"><button type="submit" className="w-[500px] h-[55px] rounded-xl px-2 font-semibold text-xl bg-gray-600/30 text-white">Use a sign-in code</button></div>

                            <div className="grid justify-center "><a href="" className="text-blue-600">Forgot Password?</a></div>

                            <div className="pl-24 pb-4 flex items-center "><input type="checkbox" className="w-[20px] h-[20px]" /><span className="pl-2 ">Remember me for 30 days</span></div>

                            <div className="pl-24">New to Filmly?  <a href="" className="text-blue-600">Sign up now.</a></div>

                            <div className="pl-24"><p className="text-sm">This page is protected by Google reCAPTCHA to ensure you are not a bot. <a href="https://developers.google.com/recaptcha/intro" target="blank" className="text-blue-600">Learn more.</a></p></div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
        </div>
        <div className='block sm:hidden'>
            <MobileSignIn/>
        </div>
        </>
    );
};



export default SignIn;
