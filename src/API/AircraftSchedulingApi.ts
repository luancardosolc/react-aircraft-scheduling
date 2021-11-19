import { AircraftSchedulingApiConfig } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

const notifyError = (msg: string) => toast.error(msg);

export class AircraftSchedulingApi {
	static async getAircrafts(offset = 0, limit = 25) {
		return axios
			.get(`${AircraftSchedulingApiConfig.baseURL}aircrafts?offset=${offset}&limit=${limit}`)
			.catch((error) => {
				notifyError(error.message);
			});
	}
}
