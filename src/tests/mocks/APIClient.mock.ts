import axios from "axios";

// The AXIOS base instance
export default axios.create({
	baseURL: "http://localhost",
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json"
	}
});
