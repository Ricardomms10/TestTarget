'use client'
import { useState } from "react";
import style from './distribudora.module.scss';

export default function Distribuidoras() {
    const [percentuais, setPercentuais] = useState({});

    const calcularPercentuais = () => {
        const faturamento = {
            SP: 67836.43,
            RJ: 36678.66,
            MG: 29229.88,
            ES: 27165.48,
            Outros: 19849.53,
        };

        const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
        const percentuais = {};

        for (const estado in faturamento) {
            percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
        }

        setPercentuais(percentuais);
    };

    return (
        <div className={style.container}>
            <h1>Distribuidoras</h1>
            <button onClick={calcularPercentuais}>Calcular Percentuais</button>
            <div className={style.percentuais}>
                {Object.entries(percentuais).map(([estado, percentual]) => (
                    <p key={estado}>
                        {estado}: {percentual}%
                    </p>
                ))}
            </div>
        </div>
    );
}
