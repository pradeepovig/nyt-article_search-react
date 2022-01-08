export interface ArticleProps {
	web_url: string,
	snippet: string,
	lead_paragraph: string,
	headline: {
		main: string,
		kicker: any,
		content_kicker: any,
		print_headline: string,
		name: any,
		seo: any,
		sub: any
	}
	pub_date: string
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
