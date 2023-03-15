import BoxSkin from "@/components/elements/BoxSkin/BoxSkin";
import SquareBlock from "@/components/elements/SquareBlock/SquareBlock";
import Flex from "@/components/elements/Flex/Flex";
import Card from "@/components/elements/Card/Card";
import Button from "@/components/elements/Button/Button";
import BoldSpan from "@/components/elements/BoldSpan/BoldSpan";
import FormInput from "@/components/modules/FormInput/FormInput";
function Contacto() {
	const inputs = [
		{
			label: "Nombre",
			isRequired: true,
			type: "text",
			name: "Nombre",
		},
		{
			label: "Apellido",
			isRequired: true,
			type: "text",
			name: "Apellido",
		},
		{
			label: "Email",
			isRequired: true,
			type: "email",
			name: "Email",
		},
		{
			label: "Asunto",
			isRequired: false,
			type: "text",
			name: "Asunto",
		},
		{
			label: "Mensaje",
			isRequired: false,
			type: "text",
			name: "Mensaje",
		},
	];
	return (
		<BoxSkin className='min-h-screen px-6'>
			<Flex className='h-full justify-evenly flex-col gap-8'>
				<Flex className='items-center gap-3 justify-center'>
					<SquareBlock />
					<h3 className='text-2xl'>Platiquemos</h3>
				</Flex>
				<Card className='bg-white min-h-[70vh]'>
					<Flex className='flex-col items-center gap-3 justify-center h-full p-6'>
						{inputs.map((input, key) => (
							<FormInput
								className='w-full'
								key={key}
								label={input.label}
								isRequired={input.isRequired}
								type={input.type}
								name={input.name}
							/>
						))}

						<Button text='ENVIAR' active={true} href='a definir' />
					</Flex>
				</Card>
			</Flex>
		</BoxSkin>
	);
}

export default Contacto;
