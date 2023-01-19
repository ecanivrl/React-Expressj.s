import { useEffect, useState } from "react"
import axios from "axios"
import "./home.css"

export const Home = () => {
    const [data, setData] = useState([])
   

    useEffect(() => {
          getUser()
    }, [])

    const getUser = async () => {
        const res = await axios.get("http://localhost:5000/users")
        if(res.status === 200) {
            setData(res.data)
        }
    }

  return (
    <div className="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {data && data.map ((user, index) => (
                 <tr key={user.id}>
                 <td>{index + 1}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.country}</td>
                 <td>{user.city}</td>
                 <td>{user.contact}</td>
             </tr>
               ))}
            </tbody>
        </table>
    </div>
  )
}
