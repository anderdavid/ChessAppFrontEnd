import React, { useState } from 'react';
/* import axios from 'axios';
import { auth } from '../../api/auth'; */
import { useSelector, useDispatch } from 'react-redux';
import { getAuthRequest } from '../../redux';

export default function LoginTest() {
  const dispach = useDispatch();
  const authResponse = useSelector((state) => state);

  const [payload, setPayLoad] = useState({
    username: '',
    password: ''
  });

  const logIn = (payload) => {
    /*  auth(payload).then((response) => {
      console.log(JSON.stringify(response));
    }); */
    dispach(getAuthRequest(payload));
  };

  return (
    <div style={{ padding: '50px 100px 50px 100px' }}>
      <h1>LoginTest</h1>
      <form action="#" onSubmit={() => logIn(payload)}>
        <input
          type="text"
          placeholder="username"
          required
          onChange={(e) => {
            setPayLoad({ ...payload, username: e.target.value });
          }}
        />{' '}
        <br />
        <input
          type="text"
          placeholder="password"
          required
          onChange={(e) => {
            setPayLoad({ ...payload, password: e.target.value });
          }}
        />
        <br />
        <input type="submit" name="signIn" />
      </form>
      <div>
        user:
        <p>{JSON.stringify(payload)}</p>
        <h2>Response:</h2>
        <p>{JSON.stringify(authResponse)}</p>
      </div>
    </div>
  );
}
