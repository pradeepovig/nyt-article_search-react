import { ReactComponent as ExclamationSVG } from '../../../assets/icons/exclamation.svg';

interface ErrorTypes {
	msg?: string;
	note?: string;
}

const Error = ({msg, note}: ErrorTypes): JSX.Element => {
	return (
		<div className="uiState empty">
			<ExclamationSVG />
			<h1>{msg || 'Something went wrong'}</h1>
			<p>{ note || 'Oops! We apologize for the inconvenience.' }</p>
		</div>
	);
}

export default Error;
