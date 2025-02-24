type ListExploreProps = {
    listName: string;
    listCreator: string;
    listImage: string | null;
    id: number;
}
import { useNavigate } from "react-router-dom";
function ListExplore({listName, listCreator, listImage,id}: ListExploreProps) {
    const navigate = useNavigate()
    const baseUrl = import.meta.env.VITE_API_URL
    return (
        <div onClick={()=>{navigate("/rank/"+id)}} className="justify-self-center w-95 h-60 rounded-2xl hover:cursor-pointer">
            <div className={`${listImage == null ? 'bg-gray-600' : ''} select-none bg-no-repeat bg-center bg-cover w-full h-40 rounded-t-2xl text-5xl flex justify-center items-center`} style={{backgroundImage:`url(${baseUrl}/storage/${listImage})`}}>{listImage==null ? "Blind Ranker" : ''}</div>
            <div className="bg-gray-400 w-full h-20 rounded-b-2xl flex flex-col justify-between px-2 py-1">
                <div className="text-3xl">
                    {listName}
                </div>
                <div className="text-xl">
                    {`By: ${listCreator}`}
                </div>
            </div>
        </div>
    )
}
export default ListExplore