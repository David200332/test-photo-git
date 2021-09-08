import axios from 'axios'

export const getPhotoList = async (setState, IsFetching) => {
    try{
        IsFetching(true)
        const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
        setTimeout(() => {
            setState(response)
            IsFetching(false)
        }, 1000)
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
        }, 1000)
    }
}

export const postFunc = async(photoId, commentData) => {
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${photoId}/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${commentData.name}`,
      comment: `${commentData.value}`,
    }),
  })
    .then((response) => {
      if (response.status === 204) {
        return new Promise((resolve) => resolve(null))
      }
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
}
