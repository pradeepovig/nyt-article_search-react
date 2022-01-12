import {PaginationTypes} from "../../core/interfaces/pagination.interface";
import {PAGINATION_BWD, PAGINATION_FWD} from "../../core/static/constants";

const Pagination = ({ page, totalPages, onPaginate }: PaginationTypes): JSX.Element => {
	return (
		<div className="pagination">
			<button disabled={page === 0} className="paginationButton" type="button" onClick={() => onPaginate(PAGINATION_BWD)}>{'<'} Prev Page</button>
			<h4>Page {page + 1}</h4>
			<button disabled={page === totalPages} className="paginationButton" type="button" onClick={() => onPaginate(PAGINATION_FWD)}>Next Page {'>'}</button>
		</div>
	);
};

export default Pagination;
