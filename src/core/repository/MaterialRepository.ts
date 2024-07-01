import { Material } from "../entities/Material.js";

export interface MaterialRepository {

    find (name: string): Material | undefined
    //findAll (): Material [] | undefined
    save (material: Material): undefined
    //update (material: Material): Material
    //delete (name: string): Material
}