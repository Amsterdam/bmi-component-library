import React, { InputHTMLAttributes } from 'react';
import { GridCellParams } from '@material-ui/data-grid';
import ColumnFilterStyle, { InputStyle } from './ColumnFilterStyle';
import CancelIcon from '@material-ui/icons/Cancel';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	params: GridCellParams;
	onKeyUp: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
	onClear: () => void;
};

const ColumnFilter: React.FC<Props> = ({ params, onKeyUp, onClear, ...props }: Props) => {
	const { field } = params;
	const [value, setValue] = React.useState<string>('');

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
				{...props}
				data-testid={`column-filter-${field}`}
			/>
			{value && (
				<CancelIcon
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
