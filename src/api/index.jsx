
import axios from 'axios'
const baseUrl =  "https://pokeapi.co/api/v2/pokemon?limit=150"
const fetchApi = async()  =>{
   const data = await axios.get(baseUrl);
   return (data.data.results)
}
export default fetchApi;