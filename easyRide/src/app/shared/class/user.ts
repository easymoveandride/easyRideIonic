export interface UserInfosInterface {
    pseudo: string;
    birthdate: number;
    email: string;
    firstname: string;
    lastname: string;
    logged: boolean;
    password: string;
}

export class User {
    private _pseudo: string;
    private _birthdate: number;
    private _email: string;
    private _firstname: string;
    private _lastname: string;
    private _logged: boolean;
    private _password: string;

    constructor() {
        // Initialisation de nos variables
        this.logged = false;
    }

    /* NOS METHODES */
    public login(servResult: UserInfosInterface): boolean {
        // Affectation des retours serveurs
        this.pseudo = servResult.pseudo;
        this.birthdate = servResult.birthdate;
        this.email = servResult.email;
        this.firstname = servResult.firstname;
        this.lastname = servResult.lastname;
        this.logged = true;
        this.password = servResult.password;

        return true;
    }

    /* GETTERS AND SETTERS */
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    get logged(): boolean {
        return this._logged;
    }

    set logged(value: boolean) {
        this._logged = value;
    }

    get pseudo(): string {
        return this._pseudo;
    }

    set pseudo(value: string) {
        this._pseudo = value;
    }

    get birthdate(): number {
        return this._birthdate;
    }

    set birthdate(value: number) {
        this._birthdate = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }
}
