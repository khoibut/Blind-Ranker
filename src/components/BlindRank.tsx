interface BlindRankProps {
    number: string | number;
    entry: string | null;
    image_path: string | null;
}
function BlindRank({ number, entry, image_path }: BlindRankProps) {
    const baseUrl=import.meta.env.VITE_API_URL;
    return (
        <div className="border-gray-500 border-1 box-border h-20 rounded-2xl gap-10 flex items-center">
            <div style={{ backgroundImage: `url(${baseUrl}/storage/${image_path})` }} className="w-25 h-full bg-center bg-contain bg-no-repeat bg-gray-200 rounded-2xl flex justify-center items-center text-xl select-none hover:cursor-pointer">
            </div>
            <div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none">
                {number}
            </div>
            <div className="text-xl">
                <div className="text-gray-100 text-xl w-90 border-gray-100 border-1 px-4 h-10 flex items-center rounded-xl">{entry}</div>
            </div>
        </div>
    )
}
export default BlindRank;