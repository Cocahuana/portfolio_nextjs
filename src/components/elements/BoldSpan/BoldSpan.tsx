import styles from "./BoldSpan.module.css";

type Props = {
	children: React.ReactNode;
};

function BoldSpan({ children }: Props) {
	return <div className={styles.BoldSpan}>{children}</div>;
}

export default BoldSpan;
