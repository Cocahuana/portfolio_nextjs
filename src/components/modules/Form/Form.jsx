import React, { useState } from "react";
import Button from "@/components/elements/Button/Button";
export const FormContext = React.createContext({
	form: {},
});
function Form(props) {
	const { children, submit = () => {}, initialValues, myRef } = props;

	const [form, setForm] = useState(initialValues);

	const handleFormChange = (event) => {
		// Get the name of the field that caused this change event
		// Get the new value of this field
		const { name, value } = event.target;

		// Update state
		// Assign new value to the appropriate form field
		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<form ref={myRef}>
			<FormContext.Provider
				value={{
					form,
					handleFormChange,
				}}
			>
				<div>{children}</div>
			</FormContext.Provider>

			<Button
				type='submit'
				text='ENVIAR'
				active={true}
				onClick={() => submit(form)}
			/>
		</form>
	);
}

export default Form;
