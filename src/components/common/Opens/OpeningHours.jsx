// IMPORT: CSS Style
import styles from "./OpeningHours.module.css";

// ARRAY:
const openingHours = [
	{day: "Monday", hours: "11:00 AM - 10:00 PM"},
	{day: "Tuesday", hours: "11:00 AM - 10:00 PM"},
	{day: "Wednesday", hours: "11:00 AM - 10:00 PM"},
	{day: "Thursday", hours: "11:00 AM - 10:00 PM"},
	{day: "Friday", hours: "11:00 AM - 11:00 PM"},
	{day: "Saturday", hours: "12:00 PM - 11:00 PM"},
	{day: "Sunday", hours: "Closed"},
];

const OpeningHours = () => {
	return (
		<div className={styles.container}>
      <h2 className={styles.title}>Opening Hours</h2 >
      <ul className={styles.list}>
        {openingHours.map((item, index) => (
	        <li key={index} className={styles.item}>
            <span className={styles.day}>{item.day}</span >
            <span className={styles.hours}>{item.hours}</span >
          </li >
        ))}
      </ul >
    </div >
	);
};

export default OpeningHours;
