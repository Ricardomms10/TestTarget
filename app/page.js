'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import style from './page.module.scss'

export default function Home() {
  const router = useRouter();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mensagemFibonacci, setMensagemFibonacci] = useState("");

  const isFibonacci = (n) => {
    let a = 0, b = 1, temp;
    if (n === 0 || n === 1) return true;
    while (b < n) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b === n;
  };

  const somarNumeros = () => {
    const soma = Number(num1) + Number(num2);
    setResultado(soma)
    if (isFibonacci(soma)) {
      setMensagemFibonacci(`O número ${soma} pertence à sequência de Fibonacci.`);
    } else {
      setMensagemFibonacci(`O número ${soma} NÃO pertence à sequência de Fibonacci.`);
    }
  };

  const irParaFaturamento = () => {
    router.push('/faturamento'); 
  };

  return (
    <div className={style.container}>
      <h1>Fibonacci?</h1>
      <h1>Some Dois Números e Verifique!</h1>

      <input
        type="number"
        value={num1 === 0 ? '' : num1}
        onChange={(e) => setNum1(e.target.value === '' ? 0 : Number(e.target.value))}
        placeholder="Digite o primeiro número"
      />

      <input
        type="number"
        value={num2 === 0 ? '' : num2} // Corrigido para num2
        onChange={(e) => setNum2(e.target.value === '' ? 0 : Number(e.target.value))} // Corrigido para num2
        placeholder="Digite o segundo número"
      />

      <button onClick={somarNumeros}>Resultado</button>

      <p>O resultado da soma é: {resultado}</p>
      <p className={isFibonacci(resultado) ? style.fibonacci : style.notFibonacci}>
        {mensagemFibonacci}
      </p>
      <button onClick={irParaFaturamento}>Ir para Cálculo de Faturamento</button>
    </div>
  );
}
