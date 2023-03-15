type Props = {
	children: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};
function Flex({ children, className, onClick }: Props) {
	return (
		<div className={`flex w-full ${className}`} onClick={onClick}>
			{children}
		</div>
	);
}

export default Flex;
