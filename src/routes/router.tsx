import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const Router = (): React.ReactElement => {
	return (
		<Routes>
			<Route path="/" element={<>home</>} />
			<Route path="/my-stat" element={<>my stat</>} />
			<Route path="/tokens" element={<>tokens</>} />
		</Routes>
	);
};
