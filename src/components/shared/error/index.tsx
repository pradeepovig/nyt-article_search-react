import { ReactComponent as ExclamationSVG } from '../../../assets/icons/exclamation.svg';

const Error = (msg: string, note: string): JSX.Element => {
	return (
		<div className="uiState empty">
			<ExclamationSVG />
			<h1>{msg || 'Something went wrong'}</h1>
			<p>{ note || 'Oops! We apologize for the inconvenience.' }</p>
		</div>
	);
}

export default Error;
