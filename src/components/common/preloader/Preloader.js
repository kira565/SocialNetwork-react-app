import React from 'react'
import preloader from '../../../etc/img/preloader.gif'
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return <div className={styles.preloader_gif}>
        <img alt='preloader' src={preloader}/>
    </div>
};

export default Preloader