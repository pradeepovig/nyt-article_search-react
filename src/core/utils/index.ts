export const setDocumentTitle = (title: string) => {
	document.title = `${title} - New York Times`;
};

export function getArticlePageURL(webURL: string): string {
	// A typical article URL is of format: https://www.nytimes.com/2022/01/11/books/review/yonder-jabari-asim.html
	let url = webURL.split("https://www.nytimes.com/")[1] || webURL.split("nytimes.com/")[1];
	return url.substring(0, url.length - 5);
}

export function isValidPath(params: string) {
	// Valid URL Format: yyyy/mm/dd/word/word/word or yyyy/mm/dd/word/word
	const format1 = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)\/([\w-]+)$/g;
	const format2 = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)/g;
	return format1.test(params) || format2.test(params);
}

// TODO: Add logic to format to any desired format
export function formatDate(date: string, format: string): string {
	// TODO: Add better date parsing
	if (!date?.length) {
		return "";
	} else {
		return new Date(Date.parse(date)).toLocaleDateString("en-US").replaceAll("/", ".");
	}
}

export function getTotalPages(hits: number) {
	return hits ? Math.floor(hits / 10) + Math.ceil( (hits % 10) / 10 ) : 0;
}
