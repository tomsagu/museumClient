
export class Brand {  
    name : String;
    text : String;
    pieces : String[];
   

    constructor(
        name : String,
        text : String,
        pieces : String[]
    ) {
        this.name = name || '';
        this.text = text || '';
        this.pieces = pieces || null;
    }
}
