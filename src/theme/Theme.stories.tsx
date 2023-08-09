// @ts-nocheck
import muiTheme from './material-ui-theme';
import styled from 'styled-components';
import { themeColor, ascDefaultTheme } from '@amsterdam/asc-ui';

export default {
	title: 'theme/Theme',
};

const ColorSquare = styled.div`
	width: 140px;
	height: 140px;
	border: 1px solid ${themeColor('tint', 'level7')};
`;

const ColorName = styled.h3`
	font-size: 12px;
`;

const ColorBox = styled.div`
	margin: 0 10px 10px 0;
	flex: 0 1 auto;
	align-self: auto;
`;

const ColorGroupName = styled.h2`
	font-size: 18px;
`;

const ColorGroupFlexBox = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

const WrapperStyle = styled.div`
	padding: 10px 20px;
`;

const Color = ({ name, value }: { groupKey: string; name: string; value: string }) => {
	return (
		<ColorBox>
			<ColorSquare style={{ backgroundColor: value }} />
			<ColorName>{name}</ColorName>
		</ColorBox>
	);
};

const ASCColorGroup = ({ groupKey }: { groupKey: string }) => {
	return (
		<WrapperStyle>
			<ColorGroupName>{groupKey}</ColorGroupName>
			<ColorGroupFlexBox>
				{Object.keys(ascDefaultTheme.colors[groupKey]).map((colorKey: string) => (
					<Color
						key={`${groupKey}-${colorKey}`}
						groupKey={groupKey}
						name={colorKey}
						value={ascDefaultTheme.colors[groupKey][colorKey]}
					/>
				))}
			</ColorGroupFlexBox>
		</WrapperStyle>
	);
};

const MUIColorGroup = ({ groupKey }: { groupKey: string }) => {
	return (
		<WrapperStyle>
			<ColorGroupName>{groupKey}</ColorGroupName>
			<ColorGroupFlexBox>
				{Object.keys(muiTheme.palette[groupKey]).map((colorKey: string) => (
					<Color
						key={`${groupKey}-${colorKey}`}
						groupKey={groupKey}
						name={colorKey}
						value={muiTheme.palette[groupKey][colorKey]}
					/>
				))}
			</ColorGroupFlexBox>
		</WrapperStyle>
	);
};

// NOTE: supplement colors are missing in ascDefaultTheme at the time of writing
export const ASCPallette = () => (
	<>
		{Object.keys(ascDefaultTheme.colors).map((groupKey: string) => (
			<ASCColorGroup key={groupKey} groupKey={groupKey} />
		))}
	</>
);

ASCPallette.storyName = 'ASC Palette';

const ignoreKeys = ['contrastThreshold', 'getContrastText', 'augmentColor', 'tonalOffset', 'type', 'divider'];

// @see https://material-ui.com/customization/default-theme/
export const MUIPalette = () => (
	<>
		{Object.keys(muiTheme.palette)
			.filter((groupKey: string) => !ignoreKeys.includes(groupKey))
			.map((groupKey: string) => (
				<MUIColorGroup key={groupKey} groupKey={groupKey} />
			))}
	</>
);
