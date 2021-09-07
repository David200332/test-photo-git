import axios from 'axios'

export const getPhotoList = async (setState, IsFetching) => {
    try{
        IsFetching(true)
        const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
        setTimeout(() => {
            setState(response)
            IsFetching(false)
        }, 2000)
    }catch(e){
        IsFetching(true)
    }
}

export const getSinglePhoto = async(setState, IsFetching, photoid) => {
    if(photoid){
        IsFetching(true)
        const response = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${photoid}`)
        setTimeout(() => {
            setState(response)
            IsFetching(false)
        }, 2000)
    }
}

export const postFunc = () => {
    
}
