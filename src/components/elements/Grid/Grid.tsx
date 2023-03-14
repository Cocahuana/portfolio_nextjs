type Props = {
	children: React.ReactNode;
	className: React.HTMLAttributes<HTMLDivElement>;
};

function Grid({ children }: Props) {
	return <div className='grid-flow-col bg-red-300'>{children}</div>;
}

export default Grid;
