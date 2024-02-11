import styled from '@emotion/styled';
import { FlexProps } from './interfaces';

export const FlexContainer = styled.div<
	Omit<FlexProps, 'children' | 'classNames'>
>`
	display: flex;
	flex-direction: ${(props) => props.direction};
	margin: ${(props) => props.mg};
	padding: ${(props) => props.pd};
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.align};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background: ${(props) => props.background};
	gap: ${(props) => props.gap};
`;
