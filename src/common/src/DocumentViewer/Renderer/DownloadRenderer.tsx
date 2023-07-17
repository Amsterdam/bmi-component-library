import type { FC } from 'react';
import { Alert, Link, Paragraph } from '@amsterdam/asc-ui';

type Props = {
	uri: string;
};

const DownloadRenderer: FC<Props> = ({ uri }) => (
	<Alert level="warning" outline>
		<Paragraph>Document kan niet weergegeven worden in de browser.</Paragraph>
		<Link href={uri} icon="download">
			Download
		</Link>
	</Alert>
);

export default DownloadRenderer;
