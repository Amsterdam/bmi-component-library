import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { GridCellParams } from '@material-ui/data-grid';
import ColumnFilterStyle, { InputStyle, CancelIconStyle } from './ColumnFilterStyle';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	params: Pick<GridCellParams, 'field'>;
	onKeyUp: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
	onClear: () => void;
};

const ColumnFilter: React.FC<Props> = ({ params, onKeyUp, onClear, ...props }: Props) => {
	const { field } = params;
	const [value, setValue] = React.useState<string | number | readonly string[]>(props?.value ?? '');

	const handleOnKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>) => {
		const input = evt.target as HTMLInputElement;
		setValue(input.value);
		onKeyUp(evt);
	};

	return (
		<ColumnFilterStyle>
			<InputStyle
				name={field}
				value={value}
				onKeyUp={handleOnKeyUp}
				onChange={(evt: ChangeEvent<HTMLInputElement>) => setValue(evt.target.value)}
				{...props}
				data-testid={`column-filter-${field}`}
			/>
			{value && (
				<CancelIconStyle
					onClick={() => {
						setValue('');
						onClear();
					}}
					data-testid={`column-filter-cancel-${field}`}
				/>
			)}
		</ColumnFilterStyle>
	);
};

ColumnFilter.displayName = 'ColumnFilter';

export default ColumnFilter;
