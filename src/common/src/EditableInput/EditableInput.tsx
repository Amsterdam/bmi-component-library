//@ts-nocheck

import React, { useState } from 'react';

//import styles

// types

const EditableInput = ({ name, data}) => {
	const [value, setValue] = useState(data);

	return (
		<input type="input" name={name} placeholder={value} value={value} onChange={(e) => setValue(e.target.value)} />
	);
};

export default EditableInput;
