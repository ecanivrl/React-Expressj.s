import React from 'react'
import "./addedit.css"

export default function AddEdit() {
  return (
    <div>
        <form >
            <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Enter a name'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="name">Email</label>
                <input type="email" id='email' placeholder='Enter a Email'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="name">Country</label>
                <input type="text" id='country' placeholder='Enter a Country'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="name">City</label>
                <input type="text" id='city' placeholder='Enter a City'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="name">Contact</label>
                <input type="text" id='contact' placeholder='Enter a Contact'/>
            </div>
        </form>
    </div>
  )
}
