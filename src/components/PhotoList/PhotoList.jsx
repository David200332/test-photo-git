import React, { useState, useEffect } from 'react'
import style from './PhotoList.module.css'
import {getPhotoList} from '../../helpers/index'
import Photo from '../Photo/Photo'
import ModalWindow from '../UI/ModalWindow/ModalWindow'
import Card from '../Card/Card'
import closepng from '../../img/Close.png'
import Lodaer from '../UI/Loader/Loader'

const PhotoList = () => {

    const [photoList, setPhotoList] = useState({})
    const [IsFetching, setIsFetching] = useState(true)
    const [visible, setVisible] = useState(false)
    const [selectPhoto, setSelectPhoto] = useState(null)

    useEffect(() => {
    getPhotoList(setPhotoList, setIsFetching)
    }, [])

    return (
        <div className={style.photolist}>
            {
              IsFetching ? <Lodaer></Lodaer> : photoList.data.map((item) => (<Photo item={item} key={item.id} setPhto={setSelectPhoto} setVisible={setVisible}></Photo>)) 
            }
            <ModalWindow visible={visible} setVisible={setVisible} setValue={setSelectPhoto}>
                <Card selectPhoto={selectPhoto} setVisible={setVisible}></Card>
                <div className={style.close_button}>
                    <button onClick={() => setVisible(false)}><img src={closepng} alt="close" /></button>
                </div>
            </ModalWindow>
        </div>
    )
}


export default PhotoList
