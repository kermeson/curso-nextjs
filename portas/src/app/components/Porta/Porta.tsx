import PortaModel from "@/app/model/porta";
import styles from "./Porta.module.css";
import Presente from "../Presente";

interface PortaProps {
  porta: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export function Porta(props: PortaProps) {
  const { porta } = props;

  const selecionada =
    porta.selecionada && !porta.aberta ? styles.selecionada : "";
  const alternarSelecao = (e: any) => props.onChange(porta.alternarSelecao());
  const abrir = (e: any) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  };

  const renderizarPorta = () => {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {!porta.aberta ? (
          renderizarPorta()
        ) : porta.temPresente ? (
          <Presente />
        ) : (
          false
        )}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
