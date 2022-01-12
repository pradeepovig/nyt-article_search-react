export interface PaginationTypes {
	page: number,
	totalPages: number,
	onPaginate: (direction: string) => void
}
