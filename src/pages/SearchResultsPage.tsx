import ListExplore from "../components/ListExplore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchIcon from "../assets/search.svg";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { BlindListType } from "../types/BlindListType";
function SearchResultsPage() {
	const baseUrl = import.meta.env.VITE_API_URL
	const navigate = useNavigate()
	const searchBar = useRef<HTMLInputElement>(null)
	const [params] = useSearchParams()
	const [results, setResults] = useState<BlindListType[]>([])
	const searchQuery = params.get("searchQuerry") || ""
	useEffect(() => {
		const header = {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
		axios.get(`${baseUrl}/api/blindlist/search`, { params: { query: searchQuery, per_page: 1000 }, headers: header }).then((res) => {
			setResults(res.data.data);
		});
	}, [searchQuery])
	return (
		<>
			<Header username={null} />
			<div className="py-30 flex flex-col text-white">
				<div className="px-30">
					<div className="text-5xl">
						Found {results.length} results matching
					</div>
					<div className="bg-gray-200 flex items-center w-230 rounded-full px-5 text-4xl mt-10">
						<input onKeyDown={(e) => {
							if (e.key === "Enter") {
								navigate(`/results?searchQuerry=${searchBar.current?.value}`);
							}
						}} type="text" ref={searchBar} className="bg-transparent outline-none placeholder:text-gray-300 text-gray-700 py-2 w-full pr-2" placeholder="TYPE HERE TO SEARCH..." defaultValue={searchQuery} />
						<img className="w-10 h-10 hover:cursor-pointer" src={SearchIcon} onClick={() => {
							navigate(`/results?searchQuerry=${searchBar.current?.value}`);
						}} />
					</div>
				</div>
				<div className="text-5xl flex flex-col items-center w-full justify-center px-10">
					<div className="mt-20 w-full grid grid-cols-[repeat(auto-fit,27rem)] gap-y-10 justify-center">
						{results.map((list) => {
							return <ListExplore id={list.id} listName={list.name} listCreator={list.user.name} listImage={null} key={list.id} />
						}
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
export default SearchResultsPage