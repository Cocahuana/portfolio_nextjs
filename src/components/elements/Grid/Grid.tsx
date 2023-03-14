type Props = {
	children: React.ReactNode;
	className: string;
};
function Grid({ children, className }: Props) {
	return <div className={`grid row-span-full ${className}`}>{children}</div>;
}

export default Grid;
