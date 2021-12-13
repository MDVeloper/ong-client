import React from 'react'
import styles from './Loading.module.css'

import Loader from 'react-loader-spinner'
const Loading = () => {
    return (
        <div align="center" className={styles.izi}>
            <Loader
                type='Hearts'
                color='#2EC4B6'
                height={300}
                width={300}
                timeout={2500}
            />
        </div>
    )
}

export default Loading
