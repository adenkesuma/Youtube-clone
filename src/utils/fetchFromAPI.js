import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50',
        part: 'snippet',
        videoId: 'M7FIvfx5J10'
    },
    headers: {
        'X-RapidAPI-Key': 'a34ebdccd6mshb1a768db8a14d23p1edd9fjsn417f7b4c2f07',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}