import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteers } from "../slices/usersSlice";
import { VolunteerTable } from "../elements/VolunteerTable";

const AdminPanel = ({ history }) => {
  const { data: UserNow } = useSelector((state) => state.user);
  const { data: Volunteers } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(async () => {
    if(!UserNow.token) history.push('/login')
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${UserNow.token}`,
      },
    };
    try {
      await dispatch(getVolunteers(config));
    } catch (err) {
      console.error("Volunteers error");
    }
  }, []);
  return (
    <div>
      <h1>Volonteers</h1>
      {Volunteers.length > 0 && <div><VolunteerTable volunteers={Volunteers} /></div>}
    </div>
  );
};

export default AdminPanel;
