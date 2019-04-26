import axios from 'axios';

const KEY = "AIzaSyDV_NYObXdpx-pBgzckS0A0gytNIlnop1s"

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
    }
});