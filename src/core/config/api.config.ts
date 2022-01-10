export const API_ARTICLE_FILTER = 'document_type:("article")';
export const API_GENERATE_FILTER_QUERY = (slug: string) => `web_url:("https://www.nytimes.com/${slug}.html")`;
export const API_FIELD_LIMITS = 'headline,web_url,lead_paragraph,snippet,pub_date';
