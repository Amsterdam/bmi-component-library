import React from 'react';

type Props = {
	uri: string;
};

const ImageRenderer: React.FC<Props> = ({ uri }) => <img src={uri} alt="Afbeelding" />;

export default ImageRenderer;
