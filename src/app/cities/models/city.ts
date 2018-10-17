export class City {
    name: string;
    userID: string;
    active: boolean;

    constructor(name?: string, userID?: string, active?: boolean) {
        this.name = name;
        this.userID = userID;
        this.active = active;
    }
}
