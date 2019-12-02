export class Folder {
    id?: number;
    name: string;
    owner: number;
    father: number;

    constructor(id = null, name = null, owner = null, father = null){
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.father= father;
    }

    
}