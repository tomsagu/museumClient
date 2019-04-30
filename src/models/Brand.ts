
export class Brand { 
    id : String; 
    name : String;
    text : String;
    pieces : String[];
   

    constructor(
        id : String,
        name : String,
        text : String,
        pieces : String[]
    ) {
        this.id = id || '';
        this.name = name || '';
        this.text = text || '';
        this.pieces = pieces || null;
    }
}
