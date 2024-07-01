export class Material {
    
    constructor (
        private _name :string,
        private _description: string,
        private _type: MaterialType,
        private _origin: string[]
    ) {}

    public get name () {
        return this._name
    }

    public set name (name: string) {
        this._name = name
    }

    public get description () {
        return this._description
    }

    public set description (description: string) {
        this._description = description
    }

    public get type () {
        return this._type
    }

    public set type (type: MaterialType) {
        this._type = type
    }

    public get origin () {
        return this._origin
    }

    public set origin (origin: string []) {
        this._origin = origin
    }
}

type MaterialType = "manufactured" | "brute"