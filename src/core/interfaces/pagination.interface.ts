export interface PaginationProps {
	page: number,
	totalPages: number,
	onPaginate: (direction: string) => void
}
