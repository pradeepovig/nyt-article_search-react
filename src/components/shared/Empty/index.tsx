import { ReactComponent as EmptySVG } from '../../../assets/icons/no-results.svg';

interface EmptyProps {
	msg?: string,
	note?: string
}

const Empty = ({ msg, note }: EmptyProps): JSX.Element => {
	return (
		<div className="uiState empty">
			<EmptySVG />
			<h1 className="uiStateMessage">{msg || 'No results found'}</h1>
			<p className="uiStateNote">{ note || 'Uh oh! Looks like we don\'t have any articles for that search query.' }</p>
		</div>
	);
}

export default Empty;
