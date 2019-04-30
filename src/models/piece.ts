
export class Piece {  
    id : String;
    name : String;
    text : String;
    year : String;
    createdate : Date;
    qr : String;
    room : String;
    brand : String;
    visits : String;
    donor : String;
    images : String[];
    types : String[];

    constructor(
        id : String,
        name : String,
        text : String,
        year : String,
        createdate : Date,
        qr : String,
        room : String,
        brand : String,
        visits : String,
        donor : String,
        images : String[],
        types : String[]
    ) {
        this.id = id || '';
        this.name = name || '';
        this.text = text || '';
        this.year = year || '';
        this.createdate = createdate || null;
        this.qr = qr || '';
        this.room = room || '';
        this.brand = brand || '';
        this.visits = brand || '';
        this.donor = brand || '';
        this.images = images || null;
        this.types = types || null;

    }
}
