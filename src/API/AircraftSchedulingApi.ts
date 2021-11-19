import { AircraftSchedulingApiConfig } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

const notifyError = (msg: string) => toast.error(msg);

export class AircraftSchedulingApi {
	static async getAircrafts(offset:number = 0, limit:number = 25) {
		return axios
			.get(`${AircraftSchedulingApiConfig.baseURL}aircrafts?offset=${offset}&limit=${limit}`)
			.catch((error) => {
				notifyError(error.message);
			});
	}

  static async getAircraftByIdent(ident: string) {
		return axios
			.get(`${AircraftSchedulingApiConfig.baseURL}aircrafts/${ident}`)
			.catch((error) => {
				notifyError(error.message);
			});
	}
}
