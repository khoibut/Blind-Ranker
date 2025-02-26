import CreateEntry from "../components/CreateEntry";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditListPage() {
	const listId = useParams().listId;
	const [entries, setEntries] = useState<string[]>(["", ""])
	const [images, setImages] = useState<(File | string | null)[]>([null, null])
	const listNameRef = useRef<HTMLInputElement>(null);
	const baseUrl = import.meta.env.VITE_API_URL;
	const navigate = useNavigate();
	const [listImage, setListImage] = useState<File | string | null>(null);
	const listImageRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const header = {
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
		axios.get(`${baseUrl}/api/blindlist/${listId}`, { headers: header }).then((res) => {
			const list = res.data;
			listNameRef.current!.value = list.name;
			setListImage(res.data.image_path);
			setEntries(list.entries.map((entry: any) => entry.entry));
			setImages(list.entries.map((entry: any) => entry.image_path));
		});
	}, [])

	function editList() {
		if (!listNameRef.current?.value) {
			alert("List name is required");
			return;
		}
		let countEntries = 0;
		entries.forEach((entry) => {
			if (entry !== "") {
				countEntries++;
			}
		});
		if (countEntries < 2) {
			alert("At least 2 entries are required");
			return;
		}
		const formData = new FormData();
		formData.append("name", listNameRef.current?.value as string);
		if (listImage) {
			if(listImage instanceof File) {
				formData.append("image", listImage as File);
			}else{
				formData.append("image", listImage as string);
			}
		}
		entries.forEach((entry, index) => {
			if (entry === "") {
				return;
			}
			formData.append(`entries[${index}][entry]`, entry);
			if (images[index]) {
				if(images[index] instanceof File) {
					formData.append(`entries[${index}][image]`, images[index] as File);
				}else{
					formData.append(`entries[${index}][image]`, images[index] as string);
				}
			}
		});
		const header = {
			"Content-Type": "multipart/form-data",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
		axios.post(`${baseUrl}/api/blindlist/${listId}?_method=put`, formData, { headers: header }).then((res) => {
		});
	}
	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
		const newEntries = [...entries];
		newEntries[index] = e.target.value;
		setEntries(newEntries);
	}
	function handleImageChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
		const newImages = [...images];
		if (e.target.files) {
			newImages[index] = e.target.files[0];
			setImages(newImages);
		}
	}
	function handleImageRemove(index: number) {
		const newImages = [...images];
		newImages[index] = null;
		setImages(newImages);
	}
	function handleRemove(index: number) {
		const newEntries = [...entries];
		newEntries.splice(index, 1);
		setEntries(newEntries);
	}
	function handleAdd() {
		const newEntries = [...entries];
		const newImages = [...images];
		newImages.push(null);
		newEntries.push("");
		setEntries(newEntries);
		setImages(newImages);
	}
	return (
		<>
			<Header username={localStorage.getItem("username")} />
			<div className="flex flex-col justify-center gap-7 items-center py-20">
				<div className="text-4xl text-gray-100 tracking-wider">
					Edit Blind List
				</div>
				<div className="flex flex-col w-3/4 py-15 px-5 border-gray-100 border-2 rounded-2xl gap-10">
					<div className="flex gap-5 text-4xl w-1/3 text-gray-100 tracking-wide">
						<div>
							Name:
						</div>
						<input ref={listNameRef} type="text" placeholder="Type Here..." className="w-96 h-10 px-5 text-gray-700 bg-gray-200 outline-none rounded-full placeholder:text-gray-300" />
					</div>
					<div className="flex items-center gap-10 text-4xl w-130 text-gray-100 tracking-wide">
						<div>
							List's Image:
						</div>
						<input accept="image/jpeg, image/png, image/jpg, image/gif, image/svg+xml, image/webp" ref={listImageRef} hidden type="file" onChange={(e) => { setListImage(e.target.files ? e.target.files[0] : null) }} />
						<div onClick={() => {
							if (listImage) {
								setListImage(null)
							} else {
								listImageRef.current?.click()
							}
						}} style={{
							backgroundImage: listImage instanceof File
							? `url(${URL.createObjectURL(listImage)})`
							: listImage ? `url(${baseUrl}/storage/${listImage})` : 'none'
						}} className="bg-gray-200 w-70 h-40 flex justify-center items-center text-gray-700 select-none hover:cursor-pointer bg-contain bg-center bg-no-repeat">
							{listImage ? "" : "Click to add image"}
						</div>
					</div>
				</div>
				<div className="flex flex-col w-2/4 py-15 px-10 border-gray-100 border-2 rounded-2xl gap-10">
					<div className="text-4xl text-gray-100 tracking-wide items-center justify-center flex">
						Entries
					</div>
					{entries.map((entry, index) => {
						return <CreateEntry key={index} image={images[index]} onImageRemove={() => { handleImageRemove(index) }} onImageChange={(e) => { handleImageChange(e, index) }} number={index + 1} value={entry} onChange={(e) => handleOnChange(e, index)} onRemove={() => handleRemove(index)} />
					})
					}
					<div onClick={handleAdd} className="select-none hover:cursor-pointer border-gray-500 border-1 box-border h-20 rounded-2xl gap-10 flex items-center justify-center text-4xl text-gray-100">
						Add new entry
					</div>
				</div>
				<div onClick={editList} className="bg-gray-300 text-5xl px-10 py-2 tracking-wider rounded-full select-none hover:cursor-pointer" >
					Create
				</div>
			</div>
			<Footer />
		</>
	);
}
export default EditListPage;
