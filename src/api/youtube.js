import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet' ,
        maxResults: 5,
        key: 'AIzaSyCcbL_ZByp1G_uOBwf9wmfZEM7_4qoBbxw',
    }
})
