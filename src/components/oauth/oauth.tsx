import icon from './oauth.svg';
import React from 'react';

export const OAuth = (): React.ReactElement => {
	return (
		<>
			<a
				href={`${import.meta.env.VITE_BASE_URL}/crm/view/redirect`}
				target="_self">
				<img src={icon} />
			</a>
		</>
	);
};
