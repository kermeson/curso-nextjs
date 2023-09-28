import PortaModel from "../model/porta";
export function criarPortas(qtde: number, seleciona: number): PortaModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === seleciona;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map((portaAtual) => {
    const igualAPortaModificada = portaAtual.numero === portaModificada.numero;
    if (igualAPortaModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.removerSelecao();
    }
  });
}
