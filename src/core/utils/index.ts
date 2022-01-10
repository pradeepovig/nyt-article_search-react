export function replaceUrl(oldurl: string): string {
	const urlFilter = "https://www.nytimes.com";
	let url = oldurl.split(urlFilter)[1];
	url = url.substring(0, url.length - 5);

	return url;
}

export function isValidURL(params: string) {
	// Valid URL Format: yyyy/mm/dd/word/word/word
	const format1 = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)\/([\w-]+)$/g;
	const format2 = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)/g;
	return format1.test(params) || format2.test(params);
}

export const setDocumentTitle = (title: string) => {
	document.title = `${title} - New York Times`;
};

export const setDateFormat = (date: string): string => {
	return new Date(date).toLocaleString().substring(0, 10);
};
