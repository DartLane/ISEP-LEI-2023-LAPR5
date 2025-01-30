/*export default interface Planeamento {
    
    camioes: {
        [key: string]: CamiaoPlano
    };
}
export interface CamiaoPlano extends Camiao {
    
    armazens: {
        [key: string]: ArmazemPlano
    };
}
export interface ArmazemPlano extends Armazem {
    entregas:{
        [key: string]: Entrega;
    }
}*/
/*
import { Camiao } from "../camiao/camiao";


export default interface Planeamento {
    
    camioes: CamiaoPlano[];
}
export interface CamiaoPlano extends Camiao {
    
    armazens: ArmazemPlano[];
}
export interface ArmazemPlano extends Armazem {
    entregas: Entrega[];
}*/

export default interface Planeamento {
    
    camiaoMatricula: string;
    armazens: Armazem[];
}
export interface Armazem {
    armazem: string;
    entregas: Entrega[];
}
export interface Entrega{
    id: string;
}
