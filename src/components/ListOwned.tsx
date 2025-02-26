type ListExploreProps = {
    rerender: () => void;
    listName: string;
    listImage: string | null;
    id: number;
    updated_date: string;
}
import { useNavigate } from "react-router-dom";
import axios from "axios";
function ListOwned({rerender, listName, listImage, id, updated_date }: ListExploreProps) {
    let date = new Date(updated_date);
    updated_date = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
    const navigate = useNavigate()
    const baseUrl = import.meta.env.VITE_API_URL
    function handleEdit(event:React.MouseEvent){
        event.stopPropagation();
        navigate('/edit/'+id);
    }
    function handleDete(event: React.MouseEvent){
        event.stopPropagation();
        const header={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
        axios.delete(`${baseUrl}/api/blindlist/${id}`,{headers:header}).then((res) => {
            rerender();
        });
    }
    return (
        <div onClick={() => { navigate("/rank/" + id) }} className="justify-self-center w-95 h-60 rounded-2xl hover:cursor-pointer">
            <div className={`${listImage == null ? 'bg-gray-600' : ''} select-none bg-no-repeat bg-center bg-cover w-full h-40 rounded-t-2xl text-5xl flex justify-center items-center`} style={{ backgroundImage: `url(${baseUrl}/storage/${listImage})` }}>{listImage == null ? "Blind Ranker" : ''}</div>
            <div className="bg-gray-400 w-full h-20 rounded-b-2xl flex flex-col justify-between px-2 py-1">
                <div className="flex items-center w-full justify-between">
                    <div className="text-3xl">
                        {listName}
                    </div>
                    <div onClick={handleEdit} className="text-lg">Edit</div>
                </div>
                <div className="flex items-center w-full justify-between" >
                    <div className="text-xl">
                        {`Last Updated: ${updated_date}`}
                    </div>
                    <div onClick={handleDete} className="text-lg">
                        Delete
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListOwned