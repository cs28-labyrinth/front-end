import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "./Room";
import MovementBar from "./MovementBar";

export default function MainPage() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    axios
      .get("https://cs28labyrinth.herokuapp.com/api/adv/rooms/")
      .then((res) => {
        const roomData = res.data.rooms;
        setRoom(roomData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {room.map((item) => {
        return (
          <Room
            getTitle={item.fields.title}
            getDescription={item.fields.description}
          />
        );
      })}
      <MovementBar />
    </>
  );
}
