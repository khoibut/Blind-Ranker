import CreateEntry from "../components/CreateEntry";
import Footer from "../components/Footer";
import Header from "../components/Header";
import refreshIcon from "../assets/refreshIcon.svg";
import BlindRank from "../components/BlindRank";
import CurrentEntry from "../components/CurrentEntry";
function BlindRankPage() {
    return (
        <>
            <Header username={"khoibut"} />
            <div className="flex flex-col justify-center gap-2 items-center py-20">
                <div className="text-4xl text-gray-100 tracking-wider">
                    CaseOh's food ranking
                </div>
                <div className="flex items-center justify-center gap-2 mt-5">
                    <div className="text-3xl text-gray-100 tracking-wider">
                        Top:
                    </div>
                    <div className="text-3xl text-gray-100 w-10 border-gray-100 border-1 rounded-md tracking-wider">
                        <input className="w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1 text-center" type="number" max="10" />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-3xl text-gray-100 tracking-wider border-gray-100 border-1 px-4 py-3 rounded-xl mt-5 select-none hover:cursor-pointer">
                    <div>
                        Refresh
                    </div>
                    <img src={refreshIcon} className="size-7" />
                </div>
                <div className="flex mt-10 flex-col w-2/4 py-15 px-10 border-gray-100 border-2 rounded-2xl gap-10">
                    <BlindRank number={1} />
                    <BlindRank number={1} />
                    <BlindRank number={1} />
                    <BlindRank number={1} />
                    <BlindRank number={1} />
                </div>
                <div className="mt-10">
                    <CurrentEntry entry={"dick"} image={null} />
                </div>
                <div className="text-3xl flex gap-5 w-170 mt-5 justify-center flex-wrap">
                    <div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div><div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div><div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div><div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}
export default BlindRankPage;
