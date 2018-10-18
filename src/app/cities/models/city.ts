export class City {
    name: string;
    userID: string;
    active: boolean;
    weather: any[];

    constructor(name?: string, userID?: string, active?: boolean, weather?: any[]) {
        this.name = name;
        this.userID = userID;
        this.active = active;
        this.weather = weather;
    }
}
