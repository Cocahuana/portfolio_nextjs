import styles from "./Flex.module.css";
type Props = {
	children: React.ReactNode;
	className?: string;
};
function Flex({ children, className }: Props) {
	return <div className={`${styles.flex} ${className}`}>{children}</div>;
}

export default Flex;
