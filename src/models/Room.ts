
export class Room {  
    id : String;
    name : String;
    location : String;
    text : String;
   
    constructor(
        id : String,
        name : String,
        location : String,
        text : String
    ) {
        this.id = id || '';
        this.name = name || '';
        this.location = location || '';
        this.text = text || '';
    }
}
