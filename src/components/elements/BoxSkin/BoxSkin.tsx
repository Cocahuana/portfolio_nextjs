type Props = {
	children: React.ReactNode;
	className: string;
};

function BoxSkin({ children, className }: Props) {
	return (
		<div
			className={`w-full h-auto bg-[color:var(--skin-dark-bg)] py-[5vh] lg:py-[10vh] ${className}`}
		>
			{children}
		</div>
	);
}

export default BoxSkin;
