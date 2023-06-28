import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";

const NewTripPage = () => {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  


  const addNewTrip = async () => {
    const response = await axios.post(
      "https://6492dd18428c3d2035d0d2bb.mockapi.io/trips",
      {
        destination: destination,
        date: date,
        duration: duration,
        imageUrl: imageUrl,
      }
    );

    console.log("response", response);
    router.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className={styles.tripForm}>
        <input
          value={destination}
          onChange={(trip) => setDestination(trip.target.value)}
          placeholder="Destination"
        />

        <input
          value={date}
          onChange={(trip) => setDate(trip.target.value)}
          placeholder="Date of trip"
        />

        <input
          value={duration}
          onChange={(trip) => setDuration(trip.target.value)}
          placeholder="Duration"
        />

        <input
          value={imageUrl}
          onChange={(trip) => setImageUrl(trip.target.value)}
          placeholder="Image URL"
        />
        <button onClick={() => addNewTrip()}>Add Trip</button>
      </div>
    </div>
  );
};

export default NewTripPage;
