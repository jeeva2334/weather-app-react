import axios from "axios";

export async function fetchApi(city,setError){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d9700e1fa1a7a519a35523563979a91`;
    try {
        const res = await axios.get(url);
        setError("");
        return res.data;
    } catch (error) {
        setError("City Not Found!");
        return "City Not Found!";
    }
}