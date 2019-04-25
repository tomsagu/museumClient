export class Article {
    name : String;
    text : String;
    images : String [];
    

    constructor(
        name : String,
        text : String,
        images : String[]
    ) {
        this.name = name || '';
        this.text = text || '';
        this.images = images || null;
    }
}