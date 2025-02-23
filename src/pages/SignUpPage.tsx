import Header from "../components/Header";
import emailIcon from "../assets/emailIcon.svg";
import passwordIcon from "../assets/passwordIcon.svg";
import usernameIcon from "../assets/usernameIcon.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUpPage() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_API_URL;
    const signUp = () => {
        if (!usernameRef.current?.value || !emailRef.current?.value || !passwordRef.current?.value || !confirmPasswordRef.current?.value) {
            alert("All fields are required");
            return;
        }
        if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
            alert("Password and Confirm Password do not match");
            return;
        }
        const header = {
            "Content-Type": "application/json",
        }
        axios.post(`${baseUrl}/user/register`, {
            name: usernameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        }, { headers: header }).then((res) => {
            localStorage.setItem("username", usernameRef.current?.value as string);
            localStorage.setItem("email", emailRef.current?.value as string);
            localStorage.setItem("token", res.data.token);
            navigate("/explore");
        });
    }
    return (
        <>
            <Header username={null} />
            <div className="flex flex-col justify-center items-center py-20">
                <div className="px-10 py-17 flex flex-col justify-center items-center w-105 shadow-[-4px_7px_29.4px_11px_#00000040]">
                    <div className="text-5xl text-gray-300">
                        Sign Up
                    </div>
                    <div className="mt-10 w-full text-2xl border-b-gray-300 border-b-4 flex gap-5">
                        <img src={usernameIcon} className="w-6" />
                        <input ref={usernameRef} type="text" placeholder="Username" className="placeholder:text-gray-300 text-gray-300 w-full h-10 tracking-wide outline-none" />
                    </div>
                    <div className="mt-10 w-full text-2xl border-b-gray-300 border-b-4 flex gap-5">
                        <img src={emailIcon} className="w-6" />
                        <input ref={emailRef} type="text" placeholder="Email" className="placeholder:text-gray-300 text-gray-300 w-full h-10 tracking-wide outline-none" />
                    </div>
                    <div className="mt-10 w-full text-2xl border-b-gray-300 border-b-4 flex gap-5">
                        <img src={passwordIcon} className="w-6" />
                        <input ref={passwordRef} type="text" placeholder="Password" className="placeholder:text-gray-300 text-gray-300 w-full h-10 tracking-wide outline-none" />
                    </div>
                    <div className="mt-10 w-full text-2xl border-b-gray-300 border-b-4 flex gap-5">
                        <img src={passwordIcon} className="w-6" />
                        <input ref={confirmPasswordRef} type="text" placeholder="Confirm Password" className="placeholder:text-gray-300 text-gray-300 w-full h-10 tracking-wide outline-none" />
                    </div>
                    <div onClick={signUp} className="text-2xl font-normal tracking-wider text-gray-300 mt-10 border-gray-300 border-1 py-2 px-10 hover:cursor-pointer">
                        <button className="hover:cursor-pointer" onClick={signUp}>
                            Sign Up
                        </button>
                    </div>
                    <div className="text-l tracking-wider text-gray-300 mt-10">
                        Already have an account? <Link to="/signin" className="text-gray-100 hover:text-gray-400">Sign in</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default SignUpPage;