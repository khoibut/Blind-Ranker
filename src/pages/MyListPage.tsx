import Header from "../components/Header";
import SearchIcon from "../assets/search.svg";
import ListExplore from "../components/ListExplore";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef,useState } from "react";
import { BlindListType } from "../types/BlindListType";
import axios from "axios";
import ListOwned from "../components/ListOwned";
function MyListPage() {
	const baseUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();
	const searchBar = useRef<HTMLInputElement>(null);
	const [recentBlindLists, setRecentBlindLists] = useState<BlindListType[]>([]);
	function render(){
		const header={
			"Content-Type":"application/json",
			"Authorization":`Bearer ${localStorage.getItem("token")}`
		}
		axios.get(`${baseUrl}/api/blindlist`,{headers:header}).then((res) => {
			setRecentBlindLists(res.data);
		});
	}
	useEffect(() => {
		const header={
			"Content-Type":"application/json",
			"Authorization":`Bearer ${localStorage.getItem("token")}`
		}
		axios.get(`${baseUrl}/api/blindlist`,{headers:header}).then((res) => {
			setRecentBlindLists(res.data);
		});
	},[])
	return (
		<>
			<Header username={null} />
			<div className="py-30 flex flex-col items-center text-white">
				<div className="text-5xl flex flex-col items-center w-full justify-center px-10">
					YOUR CREATED BLIND LISTS
					<div className="mt-20 w-full grid grid-cols-[repeat(auto-fit,27rem)] gap-y-10 justify-center">
						{recentBlindLists.map((list) => {
							return <ListOwned rerender={render} id={list.id} listName={list?.name} updated_date={list.updated_at} listImage={list.image_path} key={list.id} />
						})}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
export default MyListPage