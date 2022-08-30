import classNames from "classnames"
import { useState } from "react"
import styles from './Formulario.module.scss'


interface props {
    handleSubmitParent: ( avaliacao: string , alguel:string) => void
}


const Formulario = ({handleSubmitParent} : props) => {
    
    const [avaliacao, setAvaliacao] = useState('')
    const [alguel, setAluguel] = useState('')

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmitParent( avaliacao, alguel )
    }
    
    return (
        <form
            onSubmit={ (e) => handleSubmitForm(e)}  
        >
            <div className={styles.formGroup}>
                <label htmlFor={'avaliacao'}>
                    Qual o valor do imóvel?
                </label>
                <div className={styles.formGroup__inputContainer}>
                    <input
                        type={'number'}
                        name={'avaliacao'}
                        id={'avaliacao'}
                        pattern="\d*"
                        required
                        value={avaliacao}
                        onChange={ (e) => setAvaliacao( e.target.value )}
                    />
                    { avaliacao? <><span className={styles.formGroup__inputContainer__currency}>R$</span>
                    <span className={styles.formGroup__inputContainer__cent}>,00</span></> : ''}
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor={'alguel'}>
                    Qual o valor mensal de aluguel?
                </label>
                <div className={styles.formGroup__inputContainer}>
                    <input
                        type={'number'}
                        name={'alguel'}
                        id={'alguel'}
                        pattern="\d*"
                        required
                        value={alguel}
                        onChange={ (e) => setAluguel( e.target.value )}
                    />
                    { alguel? <><span className={styles.formGroup__inputContainer__currency}>R$</span>
                    <span className={styles.formGroup__inputContainer__cent}>,00</span></> : ''}
                </div>
                
            </div>

            <div className={styles.buttonGroup}>
                <button className={classNames({
                    [styles.buttonGroup__button]: true,
                    [styles['buttonGroup__button--inactive']]: !avaliacao || !alguel
                })} type={'submit'}>Ver resultados</button>
            </div>
            
        </form>
    )
}

export default Formulario