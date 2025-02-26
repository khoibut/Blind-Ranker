import { useRef } from "react";
interface CreateEntryProps {
    number: string | number;
    image: File | string | null;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemove: () => void;
    onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImageRemove: () => void;
}
function CreateEntry({ number, value, onChange, onRemove, image, onImageChange, onImageRemove }: CreateEntryProps) {
    const imageRef = useRef<HTMLInputElement>(null);
    const baseUrl = import.meta.env.VITE_API_URL;
    return (
        <div className="border-gray-500 border-1 box-border h-20 rounded-2xl gap-10 flex items-center">
            <input accept="image/jpeg, image/png, image/jpg, image/gif, image/svg+xml, image/webp" ref={imageRef} type="file" className="hidden" onChange={onImageChange} />
            <div onClick={() => {
                if (image != null) {
                    onImageRemove();
                } else {
                    imageRef.current?.click()
                }
            }} style={{
                backgroundImage: image instanceof File
                    ? `url(${URL.createObjectURL(image)})`
                    : image ? `url(${baseUrl}/storage/${image})` : 'none'
            }} className="w-25 h-full bg-gray-200 rounded-2xl flex justify-center items-center text-xl select-none hover:cursor-pointer bg-contain bg-center bg-no-repeat">
                {image ? "" : "Add image"}
            </div>
            <div className="bg-gray-200 text-4xl px-5 py-1 rounded-xl select-none">
                {number}
            </div>
            <div className="text-xl">
                <input
                    placeholder="Type here..."
                    className="text-gray-100 text-xl w-90 border-gray-100 border-1 px-4 py-2 rounded-xl"
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div onClick={onRemove} className="text-gray-100 text-6xl select-none hover:cursor-pointer">
                -
            </div>
        </div>
    )
}
export default CreateEntry;