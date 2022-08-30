import styles from './Resultados.module.scss'

interface props {
    avaliacao: number | string,
    aluguel: number | string,
    economia: number,
    irpf: number,
    custo: number,
    handleBack: () => void
}

export default function Resultados( { avaliacao, aluguel, economia, irpf, custo, handleBack} : props ) {

    return (
        <>
            <div className={styles.resultadoGrid}>
                <div>
                   <div>IRPF: {irpf}</div>
                    <div>Economia Aluguel: {economia}  ( {(1-(economia/irpf))*100}% )</div> 
                </div>
                <div>
                    <div>Judicial com litigio: {custo} ( {custo/Number(avaliacao)*100}% )</div>
                </div>
            </div>

            <div className={styles.buttonGroup}>
                <button className={styles.buttonGroup__button} onClick={() => handleBack()}>Voltar</button>
            </div>
        </>
    )
}