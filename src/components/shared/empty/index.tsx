import { ReactComponent as EmptySVG } from '../../../assets/icons/no-results.svg';

const Empty = (msg: string, note: string): JSX.Element => {
	return (
		<div className="uiState empty">
			<EmptySVG />
			<h1>{msg || 'No results found'}</h1>
			<p>{ note || 'Uh oh! Looks like we don\'t have any articles for that search query.' }</p>
		</div>
	);
}

export default Empty;
