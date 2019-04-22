export class Article {
    name : String;
    text : String;
    image : String [];
    

    constructor(
        name : String,
        text : String,
        image : String[]
    ) {
        this.name = name || '';
        this.text = text || '';
        this.image = image || null;
    }
}