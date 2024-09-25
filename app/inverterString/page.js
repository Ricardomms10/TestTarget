'use client';
import { useState } from 'react';
import style from './inverterstring.module.scss';

export default function InverterString() {
    const [inputString, setInputString] = useState('');
    const [reversedString, setReversedString] = useState('');

    const inverterString = (str) => {
        let resultado = '';
        for (let i = str.length - 1; i >= 0; i--) {
            resultado += str[i];
        }
        return resultado;
    };

    const handleInverter = () => {
        const resultado = inverterString(inputString);
        setReversedString(resultado);
    };

    return (
        <div className={style.container}>
            <h1>Inverter String</h1>
            <input
            className={style.input}
                type="text"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                placeholder="Digite uma string"
            />
            <button onClick={handleInverter} className={style.button}>Inverter</button>

            {reversedString && (
                <p>String invertida: {reversedString}</p>
            )}
        </div>
    );
}
