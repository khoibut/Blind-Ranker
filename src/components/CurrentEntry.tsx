function CurrentEntry({entry,image}: {entry: string, image: string | null}) {
    const baseUrl=import.meta.env.VITE_API_URL;
    return (
        <div className="border-gray-500 border-1 box-border h-20 rounded-2xl gap-34 flex items-center pr-20 bg-center bg-contain bg-no-repeat">
            <div className="w-25 h-full bg-gray-200 rounded-2xl flex justify-center items-center text-xl select-none hover:cursor-pointer bg-contain bg-center bg-no-repeat" style={{backgroundImage:`url(${baseUrl}/storage/${image})`}}>
            </div>
            <div className="text-xl">
                <div className="text-gray-100 text-xl w-90 border-gray-100 border-1 px-4 py-2 rounded-xl">{entry}</div>
            </div>
        </div>
    )
}
export default CurrentEntry;