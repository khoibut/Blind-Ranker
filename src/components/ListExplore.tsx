type ListExploreProps = {
    listName: string;
    listCreator: string;
    listImage: string | null;
}
function ListExplore({listName, listCreator, listImage}: ListExploreProps) {
    return (
        <div className="justify-self-center w-95 h-60 rounded-2xl hover:cursor-pointer">
            <div className={`${listImage == null ? 'bg-gray-600' : ''} select-none bg-no-repeat bg-center bg-cover w-full h-40 rounded-t-2xl text-5xl flex justify-center items-center`} style={{backgroundImage:`url(${listImage})`}}>{listImage==null ? "Blind Ranker" : ''}</div>
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