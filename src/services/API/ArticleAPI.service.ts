import client from './APIClient';
import {API_FIELD_LIMITS, API_GENERATE_FILTER_QUERY} from "../../core/config/api.config";

const ArticleAPIService = async (slug:string) => {
	return await client.get(`?fl=${API_FIELD_LIMITS}&fq=${API_GENERATE_FILTER_QUERY(slug)}&api-key=${process.env.REACT_APP_API_KEY}`);
}

export default ArticleAPIService;
