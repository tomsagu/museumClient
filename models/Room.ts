
export class Room {  
    name : String;
    location : String;
    text : String;
   
    constructor(
        name : String,
        location : String,
        text : String
    ) {
        this.name = name || '';
        this.location = location || '';
        this.text = text || '';
    }
}
