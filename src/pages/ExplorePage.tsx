import Header from "../components/Header";
import SearchIcon from "../assets/search.svg";
import ListExplore from "../components/ListExplore";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef,useState } from "react";
import { BlindListType } from "../types/BlindListType";
import axios from "axios";
function ExplorePage() {
	const baseUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();
	const searchBar = useRef<HTMLInputElement>(null);
	const [recentBlindLists, setRecentBlindLists] = useState<BlindListType[]>([]);
	useEffect(() => {
		const header={
			"Content-Type":"application/json",
			"Authorization":`Bearer ${localStorage.getItem("token")}`
		}
		axios.get(`${baseUrl}/api/blindlist/recent`,{params:{page:1,perPage:10},headers:header}).then((res) => {
			setRecentBlindLists(res.data.data);
		});
	},[])
	return (
		<>
			<Header username={null} />
			<div className="py-50 flex flex-col items-center text-white">
				<div className="text-5xl">
					WHAT DO YOU WANT TO BLIND RANK TODAY?
				</div>
				<div className="bg-gray-200 flex items-center w-230 rounded-full px-5 text-4xl mt-20">
					<input onKeyDown={(e) => {
						if (e.key === "Enter") {
							navigate(`/results?searchQuerry=${searchBar.current?.value}`);
						}
					}} type="text" ref={searchBar} className="bg-transparent outline-none placeholder:text-gray-300 text-gray-700 py-2 w-full pr-2" placeholder="TYPE HERE TO SEARCH..." />
					<img className="w-10 h-10 hover:cursor-pointer" src={SearchIcon} onClick={() => {
						navigate(`/results?searchQuerry=${searchBar.current?.value}`);
					}} />
				</div>
				<div className="text-5xl mt-60 flex flex-col items-center w-full justify-center px-10">
					EXPLORE THESE RECENT BLIND LISTS
					<div className="mt-20 w-full grid grid-cols-[repeat(auto-fit,27rem)] gap-y-10 justify-center">
						{recentBlindLists.map((list) => {
							return <ListExplore id={list.id} listName={list?.name} listCreator={list.user.name} listImage={list.image_path} key={list.id} />
						})}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
export default ExplorePage