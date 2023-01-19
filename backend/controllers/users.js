import {v4 as uuid} from 'uuid';


let users = [
    {
        id: uuid(),
        name: 'John Doe',
        email: 'John@gmiaml.com',
        country: "USA",
        city: "New York",
        contact: "1234567890",
    },
    {
        id: uuid(),
        name: 'Şoreş Axin',
        email: 'Şoreş@gmiaml.com',
        country: "KRD",
        city: "Başor",
        contact: "+85 20 1234567890",
    },
]

// !GET users
export const getUsers = (req, res) => {
  res.send(users);
};

// !GET userById
export const getSingleUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === id);
    if (!user) {
      res.status(400).send("User not found!");
    }
    res.send(user);
  };

// !POST user Create
export const createUser = (req, res) => {
   const {name, email, country, city, contact} = req.body;
   const user = {
         id: uuid(),
            name,
            email,
            country,
            city,
            contact,
    };
    users.push(user);
    res.send("New User Created");
};

// ! Delete user
export const deleteUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === id);
    users = users.filter((u) => u.id !== id);
    if(!user){
        res.status(404).send("User not found");
    }
   res.send(users);
};

// ! Update user
export const updateUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === id);
    const {name, email, country, city, contact} = req.body;
    if(!user){
        res.status(404).send("User not found");
    }
    user.name = name;
    user.email = email;
    user.country = country;
    user.city = city;
    user.contact = contact;
   res.send(user);
};
