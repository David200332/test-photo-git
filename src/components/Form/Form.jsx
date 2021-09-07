import React from 'react'
import style from './Form.module.css'

const Form = ({clickHandler, inputValue, setInputValue}) => {
    return (
        <div>
            <form onSubmit={clickHandler} className={style.form}>
                    <input type="text" required value={inputValue.name} onChange={(e) => setInputValue({...inputValue, name: e.target.value})} placeholder="Ваше имя"/>
                    <input type="text" required value={inputValue.value} onChange={(e) => setInputValue({...inputValue, value: e.target.value})} placeholder="Ваш комментраий"/>
                    <button type="submit" className={style.button}>Оставить комментраий</button> 
            </form>
        </div>
    )
}

export default Form
