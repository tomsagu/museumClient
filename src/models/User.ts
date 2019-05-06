export class User{
    id: string;
    username: string;
    password: string;
    rol: string;
    
    constructor(
        id?: string,
        username?: string,
        password?: string,
        rol?: string
    ){
        this.id = id || '';
        this.username = username || '';
        this.password = password || '';
        this.rol = rol || '';
    }
}