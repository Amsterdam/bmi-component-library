import type { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent } from 'react';
import { useEffect, useState } from 'react';
import { GridCellParams } from '@mui/x-data-grid';
import ColumnFilterStyle, { InputStyle, CancelIconStyle } from './ColumnFilterStyle';

type Value = InputHTMLAttributes<HTMLInputElement>['value'];

type Props = InputHTMLAttributes<HTMLInputElement> & {
	params: Pick<GridCellParams, 'field'>;
	onFilter: (value: string) => void;
	onClear: () => void;
};

const ColumnFilter: FC<Props> = ({ params, onFilter, onClear, ...props }: Props) => {
	const { field } = params;
	const [value, setValue] = useState<Value>(props?.value ?? '');

	const handleOnKeyUp = (evt: KeyboardEvent<HTMLInputElement>) => {
		const input = evt.target as HTMLInputElement;
		setValue(input.value);
	};

	useEffect(() => onFilter(value as string), [value]);

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

export default ColumnFilter;
