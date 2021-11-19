import { AircraftSchedulingApiConfig } from "../config";
import axios from "axios";

export class AircraftSchedulingApi {
	static async getAircrafts() {
		return axios.get(`${AircraftSchedulingApiConfig.baseURL}aircrafts`);
	}
}
