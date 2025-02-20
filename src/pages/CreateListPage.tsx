import CreateEntry from "../components/CreateEntry";
import Footer from "../components/Footer";
import Header from "../components/Header";

function CreateListPage() {
	return (
		<>
			<Header username={"khoibut"} />
			<div className="flex flex-col justify-center gap-7 items-center py-20">
				<div className="text-4xl text-gray-100 tracking-wider">
					Create a new blind list
				</div>
				<div className="flex flex-col w-3/4 py-15 px-5 border-gray-100 border-2 rounded-2xl gap-10">
					<div className="flex gap-5 text-4xl w-1/3 text-gray-100 tracking-wide">
						<div>
							Name:
						</div>
						<input type="text" placeholder="Type Here..." className="w-96 h-10 px-5 text-gray-700 bg-gray-200 outline-none rounded-full placeholder:text-gray-300" />
					</div>
					<div className="flex items-center gap-10 text-4xl w-130 text-gray-100 tracking-wide">
						<div>
							List's Image:
						</div>
						<div className="bg-gray-200 w-70 h-40 flex justify-center items-center text-gray-700 select-none hover:cursor-pointer">
							Click to add image
						</div>
					</div>
				</div>
				<div className="flex flex-col w-2/4 py-15 px-10 border-gray-100 border-2 rounded-2xl gap-10">
					<div className="text-4xl text-gray-100 tracking-wide items-center justify-center flex">
						Entries
					</div>
					<CreateEntry number={1} />
					<CreateEntry number={2} />
					<CreateEntry number={3} />
					<CreateEntry number={4} />
					<div className="select-none hover:cursor-pointer border-gray-500 border-1 box-border h-20 rounded-2xl gap-10 flex items-center justify-center text-4xl text-gray-100">
						Add new entry
					</div>
				</div>
				<div className="bg-gray-300 text-5xl px-10 py-2 tracking-wider rounded-full select-none hover:cursor-pointer" >
					Create
				</div>
			</div>
			<Footer />
		</>
	);
}
export default CreateListPage;
