export class User {
    id?: number;
    email: string;
    username?: string;
    password: string;

    jwt?: string;

    constructor(id?, username?, email?) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
}