import Header from "../components/Header";
import emailIcon from "../assets/emailIcon.svg";
import passwordIcon from "../assets/passwordIcon.svg";
import usernameIcon from "../assets/usernameIcon.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function SigninPage() {
    return (
        <>
            <Header username={null} />
            <div className="flex flex-col justify-center items-center py-20">
                <div className="px-10 py-17 flex flex-col justify-center items-center w-105 shadow-[-4px_7px_29.4px_11px_#00000040]">
                    <div className="text-5xl text-gray-300">
                        Sign in
                    </div>
                    <div className="mt-10 w-full text-2xl border-b-gray-300 border-b-4 flex gap-5">
                        <img src={usernameIcon} className="w-6" />
                        <input type="text" placeholder="Username" className="placeholder:text-gray-300 text-gray-300 w-full h-10 tracking-wide outline-none" />
                    </div>
                    <div className="mt-10 w-full text-2xl border-b-gray-300 border-b-4 flex gap-5">
                        <img src={emailIcon} className="w-6" />
                        <input type="text" placeholder="Email" className="placeholder:text-gray-300 text-gray-300 w-full h-10 tracking-wide outline-none" />
                    </div>
                    <div className="mt-10 w-full text-2xl border-b-gray-300 border-b-4 flex gap-5">
                        <img src={passwordIcon} className="w-6" />
                        <input type="text" placeholder="Password" className="placeholder:text-gray-300 text-gray-300 w-full h-10 tracking-wide outline-none" />
                    </div>
                    <div className="text-2xl font-normal tracking-wider text-gray-300 mt-10 border-gray-300 border-1 py-2 px-10">
                        <button className="">
                            Sign in
                        </button>
                    </div>
                    <div className="text-l tracking-wider text-gray-300 mt-10">
                        Don't have an account? <Link to="/signup" className="text-gray-100 hover:text-gray-400">Sign up</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default SigninPage;