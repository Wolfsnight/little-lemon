import styles from './ButtonLink.module.css';

const ButtonLink = ({label, href}) => {
	return (
		<a href={href} className={styles.a}>
      <button >{label}</button >
    </a >
	);
}

export default ButtonLink;

// VORLAGE:
// <ButtonLink label="Reserve a Table" href="https://google.com" />
