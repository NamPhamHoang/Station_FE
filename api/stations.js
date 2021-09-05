import axios from "axios";
import { getAccessToken } from "../utils/getAccessToken.util";
import { response } from "../utils/response.util";
import { handlerStation } from "../utils/convertXMLtoJSON.util";
import convert from "xml-js";

const getStations = async (req, res) => {
    try {
        const token = await getAccessToken();
        if(!token) {
            return response(res).error(400, {
                message: "Unauthorization"
            });
        }
        const data = await axios({
            url: "https://opendata.nationalrail.co.uk/api/staticfeeds/4.0/stations",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": token.token
            }
        })

        
        if(data.status === 200) {
            var jsonStation = convert.xml2js(
                data.data, 
                {
                    compact: true,
                    ignoreComment: true, 
                    ignoreDoctype: true, 
                    instructionHasAttributes: true,
                    ignoreAttributes: true,
                    ignoreDeclaration: true,
                    ignoreInstruction: true,
                    alwaysArray: true
                });
            const jsonStationArr = handlerStation(jsonStation);
            return response(res).success({
                stations: jsonStationArr
            });
        }
        return response(res).error(400, {
            message: "failed to get stations"
        });
    } catch(err) {
        return response(res).error(400, {
            message: err
        });
    }
}

export default getStations;