export class File {
    ID_FICHERO?: number;
    NOMBRE: string;
    PROPIETARIO: number;
    PADRE: number;
    FORMATO: string;
    COMPARTIR: boolean;

    constructor(id = null, name = null, owner = null, father = null, format = null, share = null){
        this.ID_FICHERO = id;
        this.NOMBRE = name;
        this.PROPIETARIO = owner;
        this.PADRE= father;
        this.FORMATO = format;
        this.COMPARTIR = share;
    }
    

    
}