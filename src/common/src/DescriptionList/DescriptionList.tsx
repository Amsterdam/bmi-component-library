import React from 'react';
import {
	DescriptionStyle,
	DescriptionListStyle,
	DescriptionListItemStyle,
	DescriptionListTitleStyle,
	DescriptionListValueStyle,
	DescriptionHeadingStyle,
} from './DescriptionListStyles';

type DescriptionListItem = {
	label: string;
	value: string | React.ReactNode;
};

type DescriptionList = DescriptionListItem[];

type Props = {
	list: DescriptionList;
	heading?: string;
};

const DescriptionList: React.FC<Props> = ({ heading, list }: Props) => (
	<DescriptionStyle data-testid="description">
		{heading && <DescriptionHeadingStyle>{heading}</DescriptionHeadingStyle>}
		<DescriptionListStyle data-testid="description-list">
			{list.map((item) => (
				<DescriptionListItemStyle key={item.label}>
					<DescriptionListTitleStyle>{item.label}</DescriptionListTitleStyle>
					{typeof item.value !== 'string' ? (
						item.value
					) : (
						<DescriptionListValueStyle>{item.value}</DescriptionListValueStyle>
					)}
				</DescriptionListItemStyle>
			))}
		</DescriptionListStyle>
	</DescriptionStyle>
);

export default DescriptionList;
