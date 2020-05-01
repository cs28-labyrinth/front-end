import React, { useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// id = req.params.id
const moveNorth = () => {

    axiosWithAuth().post('api/adv/move/', {
        direction: "n"
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => console.log(err));
}

 const moveEast = () => {
    axiosWithAuth().post('/api/adv/move/', {
        direction: "e"
    })
    .then((res) => {
        console.log(res.data);
    });
}

 const moveSouth = () => {

    axiosWithAuth().post('/api/adv/move/', {
        direction: "s"
    })
    .then((res) => {
        console.log(res.data);
    });;
}

const moveWest = () => {

    axiosWithAuth().post('/api/adv/move/', {
        direction: "w"
    })
    .then((res) => {
        console.log(res.data);
    });
}
export {moveNorth, moveEast, moveSouth, moveWest}