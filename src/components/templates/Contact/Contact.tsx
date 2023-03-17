import BoxSkin from "@/components/elements/BoxSkin/BoxSkin";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import Flex from "@/components/elements/Flex/Flex";
import Card from "@/components/elements/Card/Card";
import Button from "@/components/elements/Button/Button";
import FormInput from "@/components/modules/FormInput/FormInput";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import Form from "@/components/modules/Form/Form";
import useModal from "@/hooks/useModal";
import ContactModal from "@/components/modules/Modals/ContactModal";
import { AnimatePresence, motion } from "framer-motion";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	subject: "",
	message: "",
};

const emailJsSettings = {
	serviceId: "service_s6fk0l3",
	templateId: "EzequielPortfolio",
	publicKey: "v9enjVVlkY_oP9iFX",
};

/*
 * @firstName
 * @lastName
 * @email
 * @subject
 * @message
 * @serviceId is the id of Gmail service.
 */

function Contacto() {
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<any>(null);
	const refForm = useRef<any>(null);
	const { modalOpen, close, open } = useModal();

	const [form, setForm] = useState(initialState);
	const inputs = [
		{
			label: "Nombre",
			isRequired: true,
			type: "text",
			name: "firstName",
		},
		{
			label: "Apellido",
			isRequired: true,
			type: "text",
			name: "lastName",
		},
		{
			label: "Email",
			isRequired: true,
			type: "email",
			name: "email",
		},
		{
			label: "Asunto",
			isRequired: false,
			type: "text",
			name: "subject",
		},
		{
			label: "Mensaje",
			isRequired: false,
			type: "text",
			name: "message",
		},
	];
	const sendEmail = (form: any) => {
		emailjs
			.sendForm(
				emailJsSettings.serviceId,
				emailJsSettings.templateId,
				refForm.current,
				emailJsSettings.publicKey
			)
			.then(
				(result) => {
					console.log("Result: ", result);
					setStatus(true);
					setForm(initialState);
				},
				(error) => {
					console.log("Error: ", error);
					setStatus(false);
					setMessage(
						"Hubo un problema al enviar la solicitud, por favor vuelvalo a intentar"
					);
				}
			);
		console.log({ modalOpen, open, close });
	};
	const submit = (formEvent: Event, form: any) => {
		if (formEvent) {
			formEvent.preventDefault();
		}
		setStatus(true);
		setForm(initialState);
		sendEmail(form);
	};

	return (
		<BoxSkin className='min-h-screen px-6'>
			<Flex className='h-full justify-evenly flex-col gap-8 md:max-w-[724px]'>
				<Flex className='items-center gap-3 justify-center'>
					<SquareBlock />
					<h3 className='text-2xl'>Platiquemos</h3>
				</Flex>
				<Card className='bg-white min-h-[70vh]'>
					<Flex className='flex-col items-center gap-3 justify-center h-[70vh] p-6'>
						<Form
							myRef={refForm}
							className='w-full'
							submit={submit}
							initialValues={initialState}
							onOpen={open}
						>
							<Flex className='flex-col min-h-[40vh] w-full gap-6  '>
								{inputs.map((formInput, key) => (
									<FormInput
										className='w-full flex-col gap-2'
										key={key}
										label={formInput.label}
										isRequired={formInput.isRequired}
										type={formInput.type}
										name={formInput.name}
									/>
								))}
							</Flex>
						</Form>
						{status === true && modalOpen ? (
							<ContactModal
								// modalOpen={modalOpen}
								text={message}
								handleClose={close}
							/>
						) : (
							<p className='text-red-500'>{message}</p>
						)}
					</Flex>
				</Card>
			</Flex>
		</BoxSkin>
	);
}
{
	/* <form
							ref={refForm}
							className='w-full'
							onSubmit={sendEmail}
						>
							{inputs.map((formInput, key) => (
								<FormInput
									className='w-full'
									key={key}
									label={formInput.label}
									isRequired={formInput.isRequired}
									type={formInput.type}
									name={formInput.name}
									value={formInput.value}
									onChange={handleFormChange}
								/>
							))}

							<Button type='submit' text='ENVIAR' active={true} />
						</form>
						{status ? (
							<p className='text-green-600'>Exitossss</p>
						) : (
							<p className='text-red-500'>Oh nooooooooooo</p>
						)} */
}
export default Contacto;
