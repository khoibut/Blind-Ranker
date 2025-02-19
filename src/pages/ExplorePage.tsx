import Header from "../components/Header";
import SearchIcon from "../assets/search.svg";
import ListExplore from "../components/ListExplore";
import Footer from "../components/Footer";
function ExplorePage() {
	return (
		<>
			<Header username={null} />
			<div className="py-50 flex flex-col items-center text-white">
				<div className="text-5xl">
					WHAT DO YOU WANT TO BLIND RANK TODAY?
				</div>
				<div className="bg-gray-200 flex items-center w-230 rounded-full px-5 text-4xl mt-20">
					<input type="text" className="bg-transparent outline-none placeholder:text-gray-300 text-gray-700 py-2 w-full pr-2" placeholder="TYPE HERE TO SEARCH..." />
					<img className="w-10 h-10" src={SearchIcon} />
				</div>
				<div className="text-5xl mt-60 flex flex-col items-center w-full justify-center px-10">
					EXPLORE THESE RECENT BLIND LISTS
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
export default ExplorePage