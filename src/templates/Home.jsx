import React from "react";
import { getUserId } from "../reducks/users/selectors";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../reducks/users/operations";

const Home = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state);
  const uid = getUserId(selector)

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
    </div>
  )
}

export default Home
