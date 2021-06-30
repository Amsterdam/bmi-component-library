//@ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import {
	EditableInputContainerStyle,
	EditableInputStyle,
	CancelIconStyle,
	InputContainerStyle,
	InputStyles,
	ReplayIconStyle,
	LabelStyle,
} from './EditableInputStyles';

// types

const EditableInput = ({ name, data }) => {
	const ref = useRef();
	const [value, setValue] = useState(data);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (editing && ref.current && !ref.current.contains(e.target)) {
				setEditing(false);
			}
		};
		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	});

	function handleOnKeyUp(event) {
		if (event.key === 'Enter') {
			setEditing(false);
		}
	}

	return (
		<EditableInputContainerStyle onKeyUp={(e) => handleOnKeyUp(e)}>
			{editing ? (
				<EditableInputStyle ref={ref}>
					<InputContainerStyle>
						<InputStyles
							type="input"
							name={name}
							placeholder={value}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						{value && (
							<CancelIconStyle
								onClick={() => {
									setValue('');
									// setBlurOnEscape(false);
								}}
							/>
						)}
					</InputContainerStyle>
					<ReplayIconStyle onClick={() => setValue(data)} />
				</EditableInputStyle>
			) : (
				<LabelStyle
					onDoubleClick={() => {
						setEditing(true);
					}}
				>
					{value || "Vul hier iets in"}
				</LabelStyle>
			)}
		</EditableInputContainerStyle>
	);
};

export default EditableInput;
