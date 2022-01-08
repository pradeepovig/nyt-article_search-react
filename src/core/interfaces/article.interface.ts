export interface ArticleProps {
	web_url: string,
	snippet: string,
	lead_paragraph: string,
	headline: {
		main: string,
		kicker: null,
		content_kicker: null,
		print_headline: string,
		name: null,
		seo: null,
		sub: null
	}
	pub_date: string,
}

export interface FetchArticlesResponseProps {
	status: string,
	copyright: string,
	response: {
		docs: ArticleProps[],
		meta: {
			hits: number,
			offset: number,
			time: number
		}
	}
}
