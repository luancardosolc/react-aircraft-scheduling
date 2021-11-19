import { AircraftSchedulingApiConfig } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

const notifyError = (msg: string) => toast.error(msg);

export class AircraftSchedulingApi {
	static async getAircrafts() {
		return axios
			.get(`${AircraftSchedulingApiConfig.baseURL}aircrafts`)
			.catch((error) => {
				notifyError(error.message);
			});
	}
}
