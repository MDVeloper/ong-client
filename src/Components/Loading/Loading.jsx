import React from 'react'

import Loader from 'react-loader-spinner'
const Loading = () => {
    return (
        <div align="center">
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
