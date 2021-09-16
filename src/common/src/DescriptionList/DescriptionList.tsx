import React, { HTMLAttributes } from 'react';
import {
	DescriptionStyle,
	DescriptionListStyle,
	DescriptionListItemStyle,
	DescriptionListTitleStyle,
	DescriptionListValueStyle,
	DescriptionHeadingStyle,
	DescriptionFooterStyle,
} from './DescriptionListStyle';

type DescriptionListItem = {
	label: string;
	value: string | React.ReactNode;
};

type DescriptionList = DescriptionListItem[];

export type Props = {
	list: DescriptionList;
	heading?: string;
	footer?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const DescriptionList: React.FC<Props> = ({ heading, list, footer, ...otherProps }: Props) => (
	<DescriptionStyle data-testid="description" {...otherProps}>
		{heading && <DescriptionHeadingStyle>{heading}</DescriptionHeadingStyle>}
		<DescriptionListStyle data-testid="description-list">
			{list.map((item) => (
				<DescriptionListItemStyle key={item.label}>
					<DescriptionListTitleStyle>{item.label}</DescriptionListTitleStyle>
					<DescriptionListValueStyle>{item.value}</DescriptionListValueStyle>
				</DescriptionListItemStyle>
			))}
		</DescriptionListStyle>
		{footer && <DescriptionFooterStyle data-testid="description-footer">{footer}</DescriptionFooterStyle>}
	</DescriptionStyle>
);

export default DescriptionList;
