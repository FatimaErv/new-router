import axios from "axios";


const apiClient = axios.create({
    baseURL: "https://668cb756099db4c579f00b64.mockapi.io",
    headers: {
        "Content-Type": "aplication/json"
    }

})
export default apiClient