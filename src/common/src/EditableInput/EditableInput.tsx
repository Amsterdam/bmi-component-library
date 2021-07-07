//@ts-ignore
import React, { useRef, useState, useEffect, ChangeEvent } from 'react';
import useDetectTouchscreen from '@amsterdam/asc-ui/lib/utils/hooks/useDetectTouchScreen';
import {
	EditableInputStyle,
	ClearIconStyle,
	InputContainerStyle,
	InputStyles,
	RestoreIconStyle,
	LabelStyle,
} from './EditableInputStyles';

type Props = {
	data?: string;
	id: string;
};

const EditableInput: React.FC<Props> = ({ data, id, ...props }) => {
	const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
	const isTouchScreen = useDetectTouchscreen();
	const [value, setValue] = useState(data);
	const [editing, setEditing] = useState(false);
	function handleOnKeyUp(event: React.KeyboardEvent) {
		if (event.key === 'Enter') {
			setEditing(false);
		}
	}

	useEffect(() => {
		const checkIfClickedOutside: any = (e: React.MouseEvent<ChangeEvent>) => {
			if (editing && ref.current && !ref.current.contains(e.target as Node)) {
				setEditing(false);
			}
		};
		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	});

	useEffect(() => {
		const input = document.getElementById(id) as HTMLInputElement;
		if (!editing) {
			return;
		}
		input && input.select();
	}, [editing]);

	return (
		<EditableInputStyle onKeyUp={(e) => handleOnKeyUp(e)}>
			{editing ? (
				<div ref={ref}>
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
					<RestoreIconStyle onClick={() => setValue(data)} />
				</div>
			) : (
				<LabelStyle
					data-testid="editable-label"
						onClick={
						isTouchScreen
							? () => {
									setEditing(true);
							}
							: undefined
					}
					onDoubleClick={
						!isTouchScreen
							? () => {
									setEditing(true);
							}
							: undefined
					}
				>
					{value || 'Vul hier iets in'}
				</LabelStyle>
			)}
		</EditableInputStyle>
	);
};

export default EditableInput;
