import { Material } from "../../core/entities/Material.js";
import { MaterialRepository } from "../../core/repository/MaterialRepository.js";
import fs from 'fs'
import path from "path";
const __dirname = import.meta.dirname;

export class MaterialJsonRepository implements MaterialRepository {

    private folderPath = __dirname + '/data'
    private filePath = __dirname + '/data/material.json'

    constructor() {
        if (!fs.existsSync(this.folderPath)) fs.mkdir(this.folderPath, (err) => console.log('Directory created successfully!'))
        if (!fs.existsSync(this.filePath)) fs.writeFileSync(this.filePath, JSON.stringify([]), 'utf8')
    }

    public find(name: string): Material | undefined {

        const data: Material[] = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
        const materials = data.map(ell => {
            return new Material(ell.name, ell.description, ell.type, ell.origin)
        })
        return materials.find(ell => ell.name.toLowerCase() === name.toLowerCase())
    }

    public save(material: Material): undefined {

        const data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
        data.push({
            name: material.name,
            description: material.description,
            type: material.type,
            origin: material.origin
        })
        fs.writeFileSync(this.filePath, JSON.stringify(data), 'utf8')
    }
}