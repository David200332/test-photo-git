import React, { useState } from 'react'
import Form from '../Form/Form'
import style from './CardContent.module.css'

import {postFunc} from '../../helpers/index'

const CardContent = ({item}) => {

    const [inputValue, setInputValue] = useState({
        name: "",
        value: "",
    })

    const [comments, setComments] = useState(item.data.comments)

    const clickHandler = (event) => {
        event.preventDefault();
        setComments([...comments, {
            date: new Date(),
            id: new Date(),
            text: inputValue.value
        }])
        postFunc(item.data.id, inputValue)
        setInputValue({
            name: "",
            value: ""
        })
        
    }

    const convertDate = (timestamp) => {
        const date = new Date(timestamp)
        return date.toLocaleDateString()
    }

    return (
        <div className={style.content}>
            <div className={style.content__left}>
                <img src={item.data.url} alt="png" />
                <Form clickHandler={clickHandler} inputValue={inputValue} setInputValue={setInputValue}></Form>
            </div>
            <div className={style.content__right}>
                {comments.map( item => (
                    <div key={item.id}>
                        <h1>{convertDate(item.date)}</h1>
                        <h2>{item.text}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardContent
