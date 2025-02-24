import Footer from "../components/Footer";
import Header from "../components/Header";
import refreshIcon from "../assets/refreshIcon.svg";
import BlindRank from "../components/BlindRank";
import CurrentEntry from "../components/CurrentEntry";
import { useNavigate, useParams } from "react-router-dom";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { BlindListType } from "../types/BlindListType";
import { EntryType } from "../types/EntryType";
import axios from "axios";
function BlindRankPage() {
    const baseUrl = import.meta.env.VITE_API_URL;
    const params = useParams()
    const listId = params.listId
    const navigate = useNavigate();
    const [list, setList] = useState<BlindListType | null>(null);
    const [entries, setEntries] = useState<EntryType[]>([]);
    const [ranks, setRanks] = useState<string[]>([])
    const [images, setImages] = useState<(string | null)[]>([])
    const [availableTop, setAvailableTop] = useState<number[]>([])
    const [currentEntry, setCurrentEntry] = useState<EntryType | null>(null)
    const topRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        axios.get(`${baseUrl}/api/blindlist/${listId}`).then((res) => {
            setList(res.data)
            if (res.data.entries.length < 5) {
                let newRanks: string[] = []
                const newImages = Array(res.data.entries.length).fill(null)
                for (let i = 1; i <= res.data.entries.length; i++) {
                    newRanks.push("")
                }
                setAvailableTop([...Array(res.data.entries.length).keys()].map(x => x + 1))
                setImages(newImages)
                setRanks(newRanks)
            } else {
                let newRanks: string[] = []
                const newImages = Array(5).fill(null)
                for (let i = 1; i <= 5; i++) {
                    newRanks.push("")
                }
                setAvailableTop([1, 2, 3, 4, 5])
                setImages(newImages)
                setRanks(newRanks)
            }
            setEntries(res.data.entries)
        })
    }, [])

    useEffect(() => {
        if (entries.length > 0) {
            const randomIndex = Math.floor(Math.random() * entries.length);
            setCurrentEntry(entries[randomIndex]);
        }
    }, [availableTop])

    function handleOnTopChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (+e.target.value > entries.length) {
            e.target.value = entries.length.toString();
        }
    }

    function onRefresh() {
        if(topRef.current && +topRef.current.value < 2){
            alert("Must be atleast a top 2");
            return
        }
        let newRanks: string[] = []
        let newAvailableTop: number[] = []
        let newImages = Array(topRef.current? +topRef.current.value : 5).fill(null)
        for (let i = 1; i <= (topRef.current ? +topRef.current.value : 0); i++) {
            newAvailableTop.push(i)
            newRanks.push("")
        }
        setAvailableTop(newAvailableTop)
        setImages(newImages)
        setRanks(newRanks)
        if (list) {
            setEntries(list.entries);
        }
    }

    function onPickRank(rank:number){
        let newRanks=[...ranks]
        let newImages=[...images]
        if(currentEntry){
            newRanks[rank-1]=currentEntry.entry
        }
        newImages[rank-1]=currentEntry?.image_path ?? null
        setAvailableTop(availableTop.filter((e)=>e!=rank))
        setEntries(entries.filter((e)=>e!=currentEntry))
        setRanks(newRanks)
        setImages(newImages)
    }

    return (
        <>
            <Header username={localStorage.getItem("username")} />
            <div className="flex flex-col justify-center gap-2 items-center py-20">
                <div className="text-4xl text-gray-100 tracking-wider">
                    {list?.name}
                </div>
                <div className="flex items-center justify-center gap-2 mt-5">
                    <div className="text-3xl text-gray-100 tracking-wider">
                        Top:
                    </div>
                    <div className="text-3xl text-gray-100 w-10 border-gray-100 border-1 rounded-md tracking-wider">
                        <input ref={topRef} onChange={handleOnTopChange} className="w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1 text-center" type="number" max="10" />
                    </div>
                </div>
                <div onClick={onRefresh} className="flex items-center justify-center gap-2 text-3xl text-gray-100 tracking-wider border-gray-100 border-1 px-4 py-3 rounded-xl mt-5 select-none hover:cursor-pointer">
                    <div>
                        Refresh
                    </div>
                    <img src={refreshIcon} className="size-7" />
                </div>
                <div className="flex mt-10 flex-col w-2/4 py-15 px-10 border-gray-100 border-2 rounded-2xl gap-10">
                    {ranks.map((rank, index) => {
                        return <BlindRank entry={rank} image_path={images[index]} number={index + 1} key={index} />
                    })}
                </div>
                <div className="mt-10">
                    {currentEntry && availableTop.length > 0 && <CurrentEntry entry={currentEntry.entry} image={currentEntry.image_path} />}
                </div>
                <div className="text-3xl flex gap-5 w-170 mt-5 justify-center flex-wrap">
                    {availableTop.map((top, index) => {
                        return (
                            <div onClick={()=>{onPickRank(top)}} key={index} className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                                {top}
                            </div>
                        )
                    })}
                    {/* <div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div><div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div><div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div><div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none hover:cursor-pointer">
                        {1}
                    </div> */}

                </div>
            </div>
            <Footer />
        </>
    );
}
export default BlindRankPage;
