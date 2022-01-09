import {PaginationProps} from "../../core/interfaces/pagination.interface";

const Pagination = ({ prev, next, onPaginate }: PaginationProps): JSX.Element => {
	return (
		<>
			<div className="pagination">
				{
					prev && <button className="paginationButton" type="button" onClick={onPaginate('prev')}>Prev</button>
				}
				{
					next && <button className="paginationButton" type="button" onClick={onPaginate('next')}>Next</button>
				}
			</div>
		</>
	);
};

export default Pagination;
