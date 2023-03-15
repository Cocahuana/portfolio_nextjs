import styles from "./BoldSpan.module.css";

type Props = {
	children: React.ReactNode;
	className?: string;
};

function BoldSpan({ children, className }: Props) {
	return <div className={`${styles.BoldSpan} ${className}`}>{children}</div>;
}

export default BoldSpan;
