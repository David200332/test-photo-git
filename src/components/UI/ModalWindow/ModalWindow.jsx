import React from 'react'
import style from './ModalWindow.module.css'

const ModalWindow = ({children, setVisible, visible, setValue}) => {
    
    const rootClasses = [style.myModal]

    if (visible) {
        rootClasses.push(style.active);
    }

    const clickHandler = () => {
        setVisible(false)
        setValue(null)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => clickHandler()} >
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow