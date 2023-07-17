import { useRef, useState, useEffect, ChangeEvent } from 'react';
import type { FC } from 'react';
import {
	EditableInputStyle,
	ClearIconStyle,
	InputContainerStyle,
	InputStyles,
	RestoreIconStyle,
} from './EditableInputStyles';

type Props = {
	data?: string;
	id: string;
};

const EditableInput: FC<Props> = ({ data, id, ...props }: Props) => {
	const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
	const [value, setValue] = useState<string | undefined>(data || 'Vul hier iets in');

	useEffect(() => {
		const checkIfClickedOutside: any = (e: React.MouseEvent<ChangeEvent>) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				document.getElementById(id)?.blur();
			}
		};
		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, []);

	return (
		<EditableInputStyle
			ref={ref}
			onKeyUp={(e: React.KeyboardEvent) => {
				if (e.key === 'Enter') {
					document.getElementById(id)?.blur();
				}
			}}
		>
			<InputContainerStyle>
				<InputStyles
					id={id}
					data-testid="editable-input"
					placeholder={value}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					{...props}
				/>
				{value && (
					<ClearIconStyle
						data-testid="input-clear-button"
						onClick={() => {
							setValue('');
						}}
					/>
				)}
			</InputContainerStyle>
			<RestoreIconStyle data-testid="input-restore-button" onClick={() => setValue(data)} />
		</EditableInputStyle>
	);
};

export default EditableInput;
