import React, { useState } from "react";
import axios from "axios";
import TripCard from "../components/tripCard/TripCard";
import styles from "./styles.module.css";
import Navbar from "../components/navbar/Navbar";


const MainPage = ({ trips }) => {
  const [triplist, setTriplist] = useState(trips);

  return (
    <div>
      <Navbar />
      <div className={styles.cardsWrapper}>
        {triplist.map((trip) => (
          <div key={trip.id}>
            <TripCard
              id={trip.id}
              destination={trip.destination}
              date={trip.date}
              duration={trip.duration}
              imageUrl={trip.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://6492dd18428c3d2035d0d2bb.mockapi.io/trips"
    );
    const { data } = response;
    return { props: { trips: data } };
  } catch (err) {
    console.log(err);
  }
}
