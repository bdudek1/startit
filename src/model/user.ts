export class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public setPassword(password: string) : void {
        this.password = password;
    }

    public toString() {
        return "User: " + this.username + ", password: " + this.password;
    }
}