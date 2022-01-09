import client from './APIClient';
import {API_ARTICLE_FILTER, API_FIELD_LIMITS} from "../../core/config/api.config";

const SearchAPIService = async (query: string, page: number) => {
	return await client.get(`?q=${query}&page=${page}&fq=${API_ARTICLE_FILTER}&fl=${API_FIELD_LIMITS}&api-key=${process.env.API_KEY}&sort=newest`);
}

export default SearchAPIService;
