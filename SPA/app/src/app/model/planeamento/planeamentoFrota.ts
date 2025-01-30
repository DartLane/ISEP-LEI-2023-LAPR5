
export default interface PlaneamentoFrota {
    planeamento: Camiao[];
}
export interface Camiao {
    camiao: string;
    armazens: Armazem[];
}
export interface Armazem {
    armazem: string;
    entregas: Entrega[];
}
export interface Entrega{
    id: string;
}