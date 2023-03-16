import Flex from "@/components/elements/Flex/Flex";
type Props = {
	className?: string;
	label: string;
	//Typing for Input types attributes:
	type: React.HTMLInputTypeAttribute;
	name: any;
	isRequired: boolean;
	onChange?: any;
	value?: any;
};
// InputHTMLAttributes<HTMLInputElement>.type?: HTMLInputTypeAttribute | undefined
function FormInput({
	className,
	label,
	type,
	name,
	isRequired,
	onChange,
	value,
}: Props) {
	return (
		<Flex className={className}>
			<p className='w-full  text-black text-base font-["Poppins"]'>
				{label}
				{isRequired ? (
					<span className='text-[color:var(--primary-bg)] ml-1'>
						*
					</span>
				) : (
					<></>
				)}
			</p>
			<input
				className='w-full border-solid border-0 border-b-2 outline-none border-gray-500 hover:border-[color:var(--primary-bg)] text-[color:var(--primary-bg)] font-bold'
				type={type ?? "text"}
				name={name}
				onChange={onChange}
				value={value}
			/>
		</Flex>
	);
}

export default FormInput;
