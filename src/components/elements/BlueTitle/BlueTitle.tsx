type Props = {
	titleText: string;
};
function BlueTitle({ titleText }: Props) {
	return (
		<h3 className='text-xl text-[color:var(--primary-bg)]'>{titleText}</h3>
	);
}

export default BlueTitle;
