import { ReactComponent as ExclamationSVG } from '../../../assets/icons/exclamation.svg';

interface ErrorTypes {
	msg?: string;
	note?: string;
}

const Error = ({msg, note}: ErrorTypes): JSX.Element => {
	return (
		<div className="uiState error">
			<ExclamationSVG />
			<h1 className="uiStateMessage">{msg || 'Something went wrong'}</h1>
			<p className="uiStateNote">{ note || 'Oops! We apologize for the inconvenience.' }</p>
		</div>
	);
}

export default Error;
