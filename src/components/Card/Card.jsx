import React, {useState, useEffect} from 'react'
import CardContent from '../CardContent/CardContent'

import style from './Card.module.css'
import {getSinglePhoto} from '../../helpers/index'
import Lodaer from '../UI/Loader/Loader'

const Card = ({selectPhoto}) => {

    const [photo, setPhoto] = useState([])
    const [IsFetching, setIsFetching] = useState(true)
 
    useEffect(() => {
        getSinglePhoto(setPhoto, setIsFetching, selectPhoto)
    }, [selectPhoto])

    return (
        <div className={style.container}>
            {IsFetching ? <Lodaer></Lodaer> : <CardContent item={photo}></CardContent>}
        </div>
    )
}

export default Card