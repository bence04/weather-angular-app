export class City {
    name: string;
    userID: string;
    weather: any[];

    constructor(name?: string, userID?: string, weather?: any[]) {
        this.name = name;
        this.userID = userID;
        this.weather = weather;
    }
}
