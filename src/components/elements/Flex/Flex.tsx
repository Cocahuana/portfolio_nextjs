import styles from "./Flex.module.css";
type Props = {
	children: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};
function Flex({ children, className, onClick }: Props) {
	return (
		<div className={`${styles.flex} ${className}`} onClick={onClick}>
			{children}
		</div>
	);
}

export default Flex;
