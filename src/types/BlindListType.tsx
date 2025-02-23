import { EntryType } from "./EntryType";

export type BlindListType = {
    id: number;
    name: string;
    image_path: string | null;
    updatedAt: string;
    user: {
        id: number;
        name: string;
    };
    entries:EntryType[];
}