import React from 'react';
import { DummyComponentStyle } from './DummyComponentStyles';

type Props = {
	label: string;
	text: string;
};

const DummyComponent: React.FC<Props> = ({ label, text }: Props) => (
	<DummyComponentStyle>
		<h1>{label}</h1>
		<p>{text}</p>
	</DummyComponentStyle>
);

export default DummyComponent;
