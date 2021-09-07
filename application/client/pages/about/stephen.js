import Head from 'next/head'
import styles from '../../styles/About.module.css'

export default function Stephen(){
    return(
        <>
            <Head>
                <title>About Us - Stephen</title>
            </Head>
            <div className={styles.header}>
                <h1>Stephen Kelvin Justo</h1>
            </div>
            <div>
                <h2>Front-end Lead</h2>
            </div>
        </>
    )
}