import React, { useState } from "react";
import Button from "@/components/elements/Button/Button";
import Flex from "@/components/elements/Flex/Flex";
export const FormContext = React.createContext({
	form: {},
});
function Form(props) {
	const {
		children,
		submit = () => {},
		initialValues,
		myRef,
		className,
		onOpen,
	} = props;

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
	//When using TS :
	// const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {}

	return (
		<form ref={myRef} className={className} onSubmit={submit}>
			<FormContext.Provider
				value={{
					form,
					handleFormChange,
				}}
			>
				<div>{children}</div>
			</FormContext.Provider>

			<Flex className=' justify-center items-center mt-6'>
				<Button
					type='submit'
					text='ENVIAR'
					active={true}
					onClick={onOpen}
				/>
			</Flex>
		</form>
	);
}

export default Form;
