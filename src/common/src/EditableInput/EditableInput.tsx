//@ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import {
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

	function handleOnKeyUp(event) {
		if (event.key === 'Enter') {
			setEditing(false);
		}
	}

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

	useEffect(() => {
		const input = document.getElementById('input');
		if (!editing) {
			return;
		}
		(editing) && input.select();
	}, [editing]);

	return (
		<EditableInputStyle onKeyUp={(e) => handleOnKeyUp(e)}>
			{editing ? (
				<div ref={ref}>
					<InputContainerStyle>
						<InputStyles
							id="input"
							name={name}
							placeholder={value}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						{value && (
							<CancelIconStyle
								onClick={() => {
									setValue('');
								}}
							/>
						)}
					</InputContainerStyle>
					<ReplayIconStyle onClick={() => setValue(data)} />
				</div>
			) : (
				<LabelStyle
					onDoubleClick={() => {
						setEditing(true);
					}}
				>
					{/* met Inge bespreken of er iets moet staan als veld leeg is */}
					{value || 'Vul hier iets in'}
				</LabelStyle>
			)}
		</EditableInputStyle>
	);
};

export default EditableInput;
