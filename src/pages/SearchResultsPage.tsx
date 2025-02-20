import ListExplore from "../components/ListExplore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchIcon from "../assets/search.svg";
import { useSearchParams } from "react-router-dom";
function SearchResultsPage(){
    const [params]=useSearchParams()
    const searchQuery=params.get("searchQuerry") || ""
    return (
		<>
			<Header username={null} />
			<div className="py-30 flex flex-col text-white">
                <div className="px-30">
				<div className="text-5xl">
					Found 5 results matching
				</div>
				<div className="bg-gray-200 flex items-center w-230 rounded-full px-5 text-4xl mt-10">
					<input type="text" value={searchQuery} className="bg-transparent outline-none placeholder:text-gray-300 text-gray-700 py-2 w-full pr-2" placeholder="TYPE HERE TO SEARCH..." />
					<img className="w-10 h-10 hover:cursor-pointer" src={SearchIcon} />
				</div>
                </div>
				<div className="text-5xl flex flex-col items-center w-full justify-center px-10">
					<div className="mt-20 w-full grid grid-cols-[repeat(auto-fit,27rem)] gap-y-10 justify-center">
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
						<ListExplore listName="CaseOh food ranking" listCreator="CaseOhFanGirl69" listImage={null} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
export default SearchResultsPage