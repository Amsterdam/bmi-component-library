import React from 'react';
import { StyledComponent } from 'styled-components';
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

type Props = {
	list: DescriptionList;
	heading?: string;
	footer?: React.ReactNode;
};
interface IStyledDescription extends React.FunctionComponent<Props> {
	base: StyledComponent<'div', any, {}, never>;
	list: StyledComponent<'dl', any, {}, never>;
	heading: StyledComponent<'h2', any, {}, never>;
	item: StyledComponent<'div', any, {}, never>;
	title: StyledComponent<'dt', any, {}, never>;
	value: StyledComponent<'dd', any, {}, never>;
	footer: StyledComponent<'div', any, {}, never>;
}

const DescriptionList: IStyledDescription = ({ heading, list, footer }: Props) => (
	<DescriptionStyle data-testid="description">
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

DescriptionList.base = DescriptionStyle;
DescriptionList.heading = DescriptionHeadingStyle;
DescriptionList.list = DescriptionListStyle;
DescriptionList.item = DescriptionListItemStyle;
DescriptionList.title = DescriptionListTitleStyle;
DescriptionList.value = DescriptionListValueStyle;
DescriptionList.footer = DescriptionFooterStyle;

export default DescriptionList;
