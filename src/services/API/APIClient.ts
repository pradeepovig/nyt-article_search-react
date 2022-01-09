import axios from "axios";

// The AXIOS base instance
export default axios.create({
	baseURL: process.env.API_URL
});
