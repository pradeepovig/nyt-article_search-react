import React from "react";

const Error404Page = (): JSX.Element => {
	return (
		<div className="errorPage flexCol alignItemsCenter" aria-label="Error Page">
			<h1>:/</h1>
			<h2 aria-label="Error Page Title">Page Not Found</h2>
			<p aria-label="Error Page Message">We’re sorry, we seem to have lost this page, but we don’t want to lose you.</p>
		</div>
	);
};

export default Error404Page;
