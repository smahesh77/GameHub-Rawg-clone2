import axios from 'axios'
import { configDotenv } from 'dotenv'

// we define an instance of axios here and use this instance instead of axios to save
// certain stuff which will be comon to all like baseurl,params headers etc.

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '9dc644022d7947268bf435e57649c7d5'
    }
})