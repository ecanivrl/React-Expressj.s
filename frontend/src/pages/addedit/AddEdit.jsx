import React,{useState , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './addedit.css';
import axios from 'axios';  
import { toast } from "react-toastify";


const initialState = {
    name: '',
    email: '',
    country: '',
    city: '',
    contact: '',
};


export const AddEdit = () => {

    const [data, setData] = useState(initialState)
    const {name, email, country, city, contact} = data;


    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      if(id){
        getSingleUser(id);
      }
    },[id])

    const getSingleUser = async (id) => {
      const res = await axios.put(`http://localhost:5000/users/${id}`);
     setData(res.data)
  }

    const createUser = async (data) => {
        const res = await axios.post("http://localhost:5000/users/", data);
        if(res.status === 200){
          toast.success("User Created Successfully")
        }
    }

    const updateUser = async (data, id) => {
      const res = await axios.put(`http://localhost:5000/users/${id}`, data);
      if(res.status === 200){
        toast.success("User Created Successfully")
      }
  }

const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !country || !city || !contact){
        toast.error("Please fill all the fields")
        return;
    };
   if(!id){
    createUser(data);
    setTimeout(() => {
      navigate('/');
    window.location.reload();
    }, 1500);
   }else{
    updateUser(data, id);
   }
}

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
    console.log(data)
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter a name."
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter a email."
            onChange={handleInputChange}
            value={email}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter a country."
            onChange={handleInputChange}
            value={country}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter a city."
            onChange={handleInputChange}
            value={city}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Enter a contact."
            onChange={handleInputChange}
            value={contact}
          />
        </div>
        <input type="submit" className='btn btn-success' value="Add"/>
      </form>
    </div>
  );
};
