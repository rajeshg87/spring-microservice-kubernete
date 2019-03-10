export class User {
    private id: string;
    private name: string;
    private city: string;
    private age: number;

    constructor(name: string, city: string, age: number) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
}
