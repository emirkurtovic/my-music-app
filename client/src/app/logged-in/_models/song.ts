export type SongOutputDTO = {
    id: number;
    name:string;
    artist: string;
    url: string | null;
    rating:number;
    favorite:boolean;
    songCategory: string;
    dateAdded: string;
    dateEdited: string;
}

export type SongInputDTO = {
    name:string;
    artist: string;
    url: string | null;
    rating:number;
    songCategory: string;
    favorite:boolean;
}

