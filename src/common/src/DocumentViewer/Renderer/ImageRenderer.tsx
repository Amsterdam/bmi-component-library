import type { FC } from 'react';

type Props = {
	uri: string;
};

const ImageRenderer: FC<Props> = ({ uri }) => <img src={uri} alt="Afbeelding" />;

export default ImageRenderer;
