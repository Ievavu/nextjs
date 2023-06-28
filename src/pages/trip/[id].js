import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import Link from "next/link";

const Trip = () => {
  const [trip, setTrip] = useState();
  const router = useRouter();
  const fetchTrip = async () => {
    const response = await axios.get(
      `https://6492dd18428c3d2035d0d2bb.mockapi.io/trips/${router.query.id}`
    );
    const { data } = response;
    setTrip(data);
  };


  useEffect(() => {
    router.query.id && fetchTrip();
  }, [router.query.id]);



  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        {trip && (
          <div className={styles.wrapper}>
            <h1>{trip.destination}</h1>
            <img className={styles.image} src={trip.imageUrl} />
            <div className={styles.contentWrapper}>
              <div className={styles.eventInfo}>
                <h3>Kelionės data: {trip.date}</h3>
                <h3>Kelionės trukmė: {trip.duration}</h3>
                
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <button className={styles.button}>Užsakyti</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Trip;
