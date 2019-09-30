import React from 'react'
import preloader from '../../../etc/img/Preloader.gif'
import initPreloader from '../../../etc/img/Preloader_7.gif'
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return <div className={props.type === 'init' ? styles.init_preloader_gif : styles.preloader_gif}>
        {props.preType === 'init' ? <img alt={'initPre'} src={initPreloader}/> : <img alt='preloader' src={preloader}/>}
    </div>
};

export default Preloader