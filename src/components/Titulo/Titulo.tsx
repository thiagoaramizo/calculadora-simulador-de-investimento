import styles from './Titulo.module.scss'

interface props {
    children: React.ReactNode
}

export default function Titulo({children} : props) {
    return (
        <>
            <h1 className={styles.tituloPrincipal}>{children}</h1>
        </>
    )
}