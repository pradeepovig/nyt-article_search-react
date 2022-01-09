export function replaceUrl(oldurl: string): string {
	const urlFilter = "https://www.nytimes.com";
	let url = oldurl.split(urlFilter)[1];
	url = url.substring(0, url.length - 5);

	return url;
}

export function isUrlValid(params: string) {
	const regex = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)\/([\w-]+)$/g;
	const regexSec = /(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\/([\w-]+)/g;

	return regex.test(params) || regexSec.test(params);
}

export const setPageTitle = (title: string) => {
	document.title = `${title} - New York Times`;
};

export const setDateFormat = (date: string): string => {
	return new Date(date).toLocaleString().substring(0, 10);
};
