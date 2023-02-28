type Props = {
	children: React.ReactNode;
};

function BoxSkin({ children }: Props) {
	return (
		<div className='w-full h-auto bg-[color:var(--skin-dark-bg)]'>
			{children}
		</div>
	);
}

export default BoxSkin;
