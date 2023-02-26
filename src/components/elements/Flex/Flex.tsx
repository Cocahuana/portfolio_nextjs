import styles from "./Flex.module.css";
type Props = {
	children: React.ReactNode;
};
function Flex({ children }: Props) {
	return <div className={styles.flex}>{children}</div>;
}

export default Flex;
