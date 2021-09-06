import axios from "axios"

export const getAccessToken = async () => {
    try {
        const response = await axios({
            url: "https://opendata.nationalrail.co.uk/authenticate",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data:   {
                username: process.env.REACT_APP_USER_NAME,
                password: process.env.REACT_APP_PASSWORD
            }
        })
        if(response.status === 200) {
            return response.data
        }
        return null
    } catch(err) {
        return
    }
}