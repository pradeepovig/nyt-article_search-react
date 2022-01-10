import {PaginationProps} from "../../core/interfaces/pagination.interface";

const Pagination = ({ page, totalPages, onPaginate }: PaginationProps): JSX.Element => {
	return (
		<div className="pagination">
			<button disabled={page === 0} className="paginationButton" type="button" onClick={() => onPaginate('prev')}>{'<'} Prev Page</button>
			<button disabled={page === totalPages} className="paginationButton" type="button" onClick={() => onPaginate('next')}>Next Page {'>'}</button>
		</div>
	);
};

export default Pagination;
