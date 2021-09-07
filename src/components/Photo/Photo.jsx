import React from 'react'
import style from './Photo.module.css'

const Photo = ({item, setPhto, setVisible}) => {

    const clickHandler = () => {
        setPhto(item.id)
        setVisible(true)
    }

    return (
        <div className={style.content}>
            <button onClick={() => clickHandler()}><img src={item.url} alt="png"/></button> 
        </div>
    )
}

export default Photo
