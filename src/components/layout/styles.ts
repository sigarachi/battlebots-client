import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 10%;

	@media (max-width: 600px) {
		padding: 0;
		div:first-child {
			border-radius: 0 !important;
		}
	}
`;
