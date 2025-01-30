export default interface Caminho{
    id: string,
    energiaNecessariaKWh: number;
    tempoDeslocacaoMin: number;
    idArmazemOrigem: string;
    idArmazemDestino: string;
    distanciaEntreArmazens: number;
}