export const setDocumentTitle = (title: string) => {
	document.title = `${title} - New York Times`;
};

export function getArticlePageURL(webURL: string): string {
	let url = webURL.split("https://www.nytimes.com")[1];
	return url.substring(0, url.length - 5);
}

export function isValidURL(params: string) {
	// Valid URL Format: yyyy/mm/dd/word/word/word or yyyy/mm/dd/word/word
	const format1 = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)\/([\w-]+)$/g;
	const format2 = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)/g;
	return format1.test(params) || format2.test(params);
}
