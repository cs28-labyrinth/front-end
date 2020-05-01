import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import MovementBar from "./MovementBar";
import "./MapPage.css";
import Chat from "./Chat";
import Room from "./Room";

export default function MapPage() {
  const [len, setLen] = useState();
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [players, setPlayers] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://cs28labyrinth.herokuapp.com/api/adv/rooms/"
        // "http://localhost:8000/api/adv/rooms/"
      );
      const len = Math.sqrt(res.data.rooms.length);
      setLen(len);
      res.data.rooms.sort((a, b) => a.pk - b.pk);
      setRooms(res.data.rooms);
    }

    async function fetchData2() {
      const res = await axiosWithAuth().get(
        "https://cs28labyrinth.herokuapp.com/api/adv/init/"
        // "http://localhost:8000/api/adv/init/"
      );
      setUser(res.data);
      // window.Pusher.logToConsole = true;

      var pusher = new window.Pusher("34ea5cc8c99a7964e5da", {
        cluster: "us2",
      });

      var channel = pusher.subscribe(`p-channel-${res.data.uuid}`);
      channel.bind("broadcast", function (data) {
        setMessages((prev) => [...prev, data]);
      });

      let channel2 = pusher.subscribe(`p-channel-${res.data.uuid}`);
      channel2.bind("enter", function (data) {
        setPlayers((prev) => ({
          ...prev,
          [data.uuid]: data.current_room,
        }));
      });

      let channel3 = pusher.subscribe(`p-channel-${res.data.uuid}`);
      channel3.bind("move", function (data) {
        setPlayers((prev) => ({ ...prev, [data.uuid]: data.current_room }));
        axiosWithAuth()
          .get(
            "https://cs28labyrinth.herokuapp.com/api/adv/init/"
            // "http://localhost:8000/api/adv/init/"
          )
          .then((res) => setUser([...res.data]));
      });

      let channel4 = pusher.subscribe(`p-channel-${res.data.uuid}`);
      channel4.bind("exit", function (data) {
        setPlayers((prev) => {
          delete prev[data.uuid];
          return { ...prev };
        });
      });

      await axiosWithAuth().get(
        "https://cs28labyrinth.herokuapp.com/api/adv/enter/"
        // "http://localhost:8000/api/adv/enter/"
      );
    }
    fetchData();
    fetchData2();

    function userLeft(ev) {
      axiosWithAuth()
        .get(
          "https://cs28labyrinth.herokuapp.com/api/adv/exit/"
          // "http://localhost:8000/api/adv/exit/"
        )
        .then((res) => res);
    }
    window.addEventListener("unload", userLeft);

    return window.removeEventListener("unload", userLeft);
  }, []);

  return (
    <div className="outer">
      <div className="labyrinth">
        <div className="room-container">
          {rooms &&
            rooms.map((v, i) => {
              const { fields } = v;
              let borders = "room";
              if (!fields.e_to) {
                borders = borders.concat(" ", "border-right");
              }
              if (!fields.w_to) {
                borders = borders.concat(" ", "border-left");
              }
              if (!fields.n_to) {
                borders = borders.concat(" ", "border-top");
              }
              if (!fields.s_to) {
                borders = borders.concat(" ", "border-bottom");
              }

              for (const p in players) {
                if (players[p] === v.pk) {
                  borders = borders.concat(" ", "player");
                  if (p === user.uuid) {
                    // setUser((prev) => ({
                    //   ...prev,
                    //   title: fields.title,
                    //   description: fields.description
                    // }));
                  }
                }
              }
              return <div className={borders} key={v.pk}></div>;
            })}
        </div>
        <MovementBar />
      </div>
      <div className="menu">
        <Room getTitle={user?.title} getDescription={user?.description} />
        <Chat messages={messages} />
      </div>
    </div>
  );
}
