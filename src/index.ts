import { Material } from "./core/entities/Material.js";
import { MaterialJsonRepository } from "./infra/jsonRepository/MaterialJsonRepository.js";
import path from "path";

const materialJsonRepository = new MaterialJsonRepository();


const material = new Material(
    'tábua',
    'para enviar no cu',
    'manufactured',
    ['pátio']
)

materialJsonRepository.save(material)
const foundMaterial = materialJsonRepository.find('tábua')
console.log(foundMaterial)

