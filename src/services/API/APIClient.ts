import axios from "axios";

// The AXIOS base instance
export default axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json"
	}
});

//TODO: Add an interceptor
