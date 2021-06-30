//@ts-nocheck

import React, { useState } from 'react';
import { CancelIconStyle, InputContainerStyle, ReplayIconStyle } from './EditableInputStyles';

// types

const EditableInput = ({ name, data }) => {
	const [value, setValue] = useState(data);
	const [editing, setEditing] = useState(false);

	return (
		<div>
			{editing ? (
				<div>
					<InputContainerStyle>
						<input
							type="input"
							name={name}
							placeholder={value}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						{value && <CancelIconStyle onClick={() => setValue('')} />}
					</InputContainerStyle>
					<ReplayIconStyle onClick={() => setValue(data)} />
				</div>
			) : (
				<span onDoubleClick={() => setEditing(true)}>{data}</span>
			)}
		</div>
	);
};

export default EditableInput;
