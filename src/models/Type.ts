
export class Type {  
    id : String;
    name : String;   

    constructor(
        id : String,
        name : String
    ) {
        this.id = id || '';
        this.name = name || '';
    }
}
