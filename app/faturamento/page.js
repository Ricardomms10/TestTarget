'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from './faturamento.module.scss';

export default function Faturamento() {
    const [dadosFaturamento, setDadosFaturamento] = useState([]);
    const [menorFaturamento, setMenorFaturamento] = useState(0);
    const [maiorFaturamento, setMaiorFaturamento] = useState(0);
    const [diasAcimaMedia, setDiasAcimaMedia] = useState(0);

    useEffect(() => {
        const carregarDados = async () => {
            const res = await fetch('/faturamento.json');
            const data = await res.json();
            setDadosFaturamento(data);
            calcularFaturamento(data);
        };
        carregarDados();
    }, []);

    const calcularFaturamento = (faturamento) => {
        const valores = faturamento.map(item => item.valor).filter(valor => valor > 0);
        if (valores.length === 0) {
            return;
        }
        const menor = Math.min(...valores);
        const maior = Math.max(...valores);
        const soma = valores.reduce((acc, curr) => acc + curr, 0);
        const media = soma / valores.length;
        const diasAcima = valores.filter(valor => valor > media).length;
        setMenorFaturamento(menor);
        setMaiorFaturamento(maior);
        setDiasAcimaMedia(diasAcima);
    };



    return (
        <div className={style.container}>
            <h1>Resultados do Faturamento</h1>
            <p>Menor faturamento: R$ {menorFaturamento}</p>
            <p>Maior faturamento: R$ {maiorFaturamento}</p>
            <p>Dias com faturamento acima da média: {diasAcimaMedia}</p>

            
        </div>
    );
}
