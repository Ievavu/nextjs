import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const TripCard = ({ destination, date, duration, imageUrl, id }) => {
  return (
    <>
      <Link className={styles.link} href={`/trip/${id}`}>
        <div className={styles.card}>
          <img className={styles.image} src={imageUrl} />
          <div className={styles.details}>
            <h1 className={styles.destination}>{destination}</h1>
            <div className={styles.separator}></div>
            <div className={styles.duration}>Trukmė: {duration}</div>
            <div className={styles.date}>Data: {date}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TripCard;
