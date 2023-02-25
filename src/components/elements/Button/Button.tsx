import styles from "./Button.module.css";

type Props = {
	text: string;
	active: boolean;
};

function Button({ text, active }: Props) {
	return (
		<>
			{active === true ? (
				<button className={[styles.button, styles.active].join(" ")}>
					<span className={styles.button__text}>
						{text.toUpperCase()}
					</span>
				</button>
			) : (
				<button className={[styles.button, styles.passive].join(" ")}>
					<span className={styles.button__text}>
						{text.toUpperCase()}
					</span>
				</button>
			)}
		</>
	);
}

export default Button;
