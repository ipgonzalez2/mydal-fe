export class Folder {
    ID_CARPETA?: number;
    NOMBRE: string;
    PROPIETARIO: number;
    PADRE: number;

    constructor(id = null, name = null, owner = null, father = null){
        this.ID_CARPETA = id;
        this.NOMBRE = name;
        this.PROPIETARIO = owner;
        this.PADRE= father;
    }
    

    
}