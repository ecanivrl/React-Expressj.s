import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get('http://localhost:5000/users');
    if (res.status === 200) {
      setData(res.data);
    }
  };

  const onDeleteUser = async (id) => {
   if(window.confirm("Are you sure ?")){
    const res = await axios.delete(`http://localhost:5000/users/${id}`);
    console.log(res)
    if (res.status === 200) {
      toast.success("User Deleted Successfully");
      getUsers();
    }
   }
  };


  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>City</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.city}</td>
                <td>{user.contact}</td>
                <td>
                  <div className="buttons">
                    <button className="btn btn-primary">View</button>
                  <Link to={`/update/${user.id}`}  className="btn btn-success">
                 Edit
                  </Link>
                    <button className="btn btn-danger" onClick={() => onDeleteUser(user.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
