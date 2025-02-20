function BlindRank({number}: {number: string | number}) {
    return (
        <div className="border-gray-500 border-1 box-border h-20 rounded-2xl gap-10 flex items-center">
            <div className="w-25 h-full bg-gray-200 rounded-2xl flex justify-center items-center text-xl select-none hover:cursor-pointer">
            </div>
            <div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none">
                {number}
            </div>
            <div className="text-xl">
                <div className="text-gray-100 text-xl w-90 border-gray-100 border-1 px-4 py-2 rounded-xl">Dick</div>
            </div>
        </div>
    )
}
export default BlindRank;