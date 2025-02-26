import { EntryType } from "./EntryType";

export type BlindListType = {
    id: number;
    name: string;
    image_path: string | null;
    updated_at: string;
    user: {
        id: number;
        name: string;
    };
    entries:EntryType[];
}