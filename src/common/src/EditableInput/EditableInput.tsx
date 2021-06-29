//@ts-nocheck

import React, { useState } from 'react';

//import styles

// types

const EditableInput = ({ name, data }) => {
	const [value, setValue] = useState(data);
	const [editing, setEditing] = useState(false);

	return (
		<div>
			{editing ? (
				<input type="input" name={name} placeholder={value} value={value} onChange={(e) => setValue(e.target.value)} />
			) : (
				<span onClick={() =>setEditing(true)}>{data}</span>
			)}
		</div>
	);
};

export default EditableInput;
