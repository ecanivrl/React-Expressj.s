// import {Link} from "react-router-dom"
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <a href="/" className="logo">User Management System</a>
      <div className="header-right">
      <a href="/" className="active">Home</a>
      <a href="/" className="active">Add New User</a>
      </div>
    </div>
  )
}
