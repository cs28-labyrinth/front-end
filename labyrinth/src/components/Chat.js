import React, { useRef } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Chat({ messages }) {
  const inputEl = useRef(null);
  function say() {
    axiosWithAuth()
      .post("/api/adv/say/", { message: inputEl.current.value })
      .then((res) => {
        inputEl.current.value = "";
      });
  }
  console.log(messages);
  return (
    <div>
      <div>
        {messages &&
          messages.map((e, i) => {
            return (
              <div key={i}>
                {e.user} : {e.message}
              </div>
            );
          })}
      </div>
      <div>
        <input ref={inputEl} type="text" />
        <button onClick={say}>Send</button>
      </div>
    </div>
  );
}
