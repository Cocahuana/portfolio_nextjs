// shd: -11.31px 11.31px 25px 0px rgba(138,131,124,0.23);
// var(--shd,0 1px 4px rgba(0,0,0,.6));
import styles from "./Card.module.css";

type Props = {
	children: React.ReactNode;
};
function Card({ children }: Props) {
	// Card Debe tener un div contenedor con las medidas exactas ya que ocupa el 100% del espacio en el que esta contenido
	return <div className={styles.cardShadow}>{children}</div>;
}

export default Card;
