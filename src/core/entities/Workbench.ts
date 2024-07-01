export class Workbench {

    constructor (
        private _name: string,
        private _origin: string [],
        private _requiredMaterialsToBuild: RequiredMaterials [],
        private _recipes : Recipe [] = []
    ) {}

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get origin(): string[] {
        return this._origin;
    }

    set origin(origin: string[]) {
        this._origin = origin;
    }

    get requiredMaterials(): RequiredMaterials[] {
        return this._requiredMaterialsToBuild;
    }

    set requiredMaterials(_requiredMaterialsToBuild: RequiredMaterials[]) {
        this._requiredMaterialsToBuild = _requiredMaterialsToBuild;
    }

    get recipes(): Recipe[] {
        return this._recipes;
    }

    set recipes(recipes: Recipe[]) {
        this._recipes = recipes;
    }
}

type Recipe = {
    name: string,
    yield: number,
    requiredMaterials: RequiredMaterials []
}

type RequiredMaterials = {
    name: string,
    quantity: number
}

const workbench = new Workbench ('cavalete', ['pátio'], [{name:'vareta de madeira', quantity: 10}], [{name: 'Pedaço de madeira', yield: 4, requiredMaterials: [{name: 'Tora', quantity: 1}]}])

console.log(workbench.recipes)