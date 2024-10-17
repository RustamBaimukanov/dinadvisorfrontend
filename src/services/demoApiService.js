import axios from "axios";

async function getSample() {
    const result = await axios.get("http://localhost:8081/demo");
    return result.data || null;
}

export const demoApiService = {
    getSample
}