"use client";
import { useState } from "react";
import Image from "next/image";
import Presente from "../app/components/Presente";
import { Porta } from "../app/components/Porta";
import PortaModel from "@/app/model/porta";
import { atualizarPortas, criarPortas } from "./functions/portas";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2));

  const renderizarPortas = () => {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          porta={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  };

  return <div style={{ display: "flex" }}>{renderizarPortas()}</div>;
}
