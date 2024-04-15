export class TipoHotel {
    nombre:string;
    descripcion:string;
    rating:string;

    constructor(n:string, d:string, r:string) {
        this.nombre = n;
        this.descripcion = d;
        this.rating = r;
    }
}