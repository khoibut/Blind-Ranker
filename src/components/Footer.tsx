import github from "../assets/github.svg";
function Footer() {
    return (
        <footer className="w-full bg-gray-600 py-4 px-6 text-3xl font-normal text-white">
            <div>
                © 2025 - khoibut | Contact: khoibut09@gmail.com
            </div>
            <div>
                Built with React + TS
            </div>
            <img src={github} className="w-9 h-9" />
        </footer>
    )
}
export default Footer