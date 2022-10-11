import styles from "./Car.module.css";

const CarDetail = (car) => {
    return (
        <div>
            <h2 className={styles.title}>{car.name}</h2>
            <ul className={styles.list}>
                <li>KM:{car.km}</li>
                <li>Cor:{car.color}</li>
            </ul>
        </div>
    )
}

export default CarDetail;