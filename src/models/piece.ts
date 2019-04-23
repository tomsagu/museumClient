
export class Piece {  
    id : String;
    name : String;
    text : String;
    year : String;
    createdate : Date;
    qr : String;
    room_name : String;
    brand_name : String;
    images : String[];
    types : String[];

    constructor(
        id : String,
        name : String,
        text : String,
        year : String,
        createdate : Date,
        qr : String,
        room_name : String,
        brand_name : String,
        images : String[],
        types : String[]
    ) {
        this.id = id || '';
        this.name = name || '';
        this.text = text || '';
        this.year = year || '';
        this.createdate = createdate || null;
        this.qr = qr || '';
        this.room_name = room_name || '';
        this.brand_name = brand_name || '';
        this.images = images || null;
        this.types = types || null;

    }
}
