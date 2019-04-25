import { Article } from "./Article";

export class Document {
    id : String;
    name : String;
    text : String;
    imagedoc : String;
    articles : Article[];
    

    constructor(
        id : String,
        name : String,
        text : String,
        imagedoc : String,
        articles : Article[]
    ) {
        this.id = id || '';
        this.name = name || '';
        this.text = text || '';
        this.imagedoc = imagedoc || '';
        this.articles = articles || null;
    }
}