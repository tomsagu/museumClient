import { Article } from "./Article";

export class Document {
    id : String;
    name : String;
    imagedoc : String;
    articles : Article[];
    

    constructor(
        id : String,
        name : String,
        imagedoc : String,
        articles : Article[]
    ) {
        this.id = id || '';
        this.name = name || '';
        this.imagedoc = imagedoc || '';
        this.articles = articles || null;
    }
}