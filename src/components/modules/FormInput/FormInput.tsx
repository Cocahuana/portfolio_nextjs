import BoldSpan from "@/components/elements/BoldSpan/BoldSpan";

type Props = {
	className?: string;
	label: string;
	//Typing for Input types attributes:
	type: React.HTMLInputTypeAttribute;
	name: any;
	isRequired: boolean;
};
// InputHTMLAttributes<HTMLInputElement>.type?: HTMLInputTypeAttribute | undefined
function FormInput({ className, label, type, name, isRequired }: Props) {
	return (
		<div className={className}>
			<p className='text-black text-base font-["Poppins"]'>
				{label}
				{isRequired ? (
					<span className='text-[color:var(--primary-bg)]'>*</span>
				) : (
					<></>
				)}
			</p>
			<input
				className='w-full border-solid border-0 border-b-2 outline-none border-gray-500 hover:border-[color:var(--primary-bg)] text-[color:var(--primary-bg)] font-bold'
				type={type ?? "text"}
				name={name}
			/>
		</div>
	);
}

export default FormInput;
