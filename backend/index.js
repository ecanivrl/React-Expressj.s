import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());

const port = 5000;

let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'John@gmiaml.com',
        country: "USA",
        city: "New York",
        contact: "1234567890",
    },
    {
        id: 2,
        name: 'Şoreş Axin',
        email: 'Şoreş@gmiaml.com',
        country: "KRD",
        city: "Başor",
        contact: "+85 20 1234567890",
    },
]

// !GET users
app.get('/users', (req, res) => {
  res.send(users);
});

// !GET userById
app.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});

// !POST user Create
app.post('/users', (req, res) => {
   const {name, email, country, city, contact} = req.body;
   const user = {
         id: users.length + 1,
            name,
            email,
            country,
            city,
            contact,
    };
    users.push(user);
    res.send("New User Created");
});

// ! Delete user
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === parseInt(id));
    users = users.filter((u) => u.id !== parseInt(id));
    if(!user){
        res.status(404).send("User not found");
    }
   res.send(users);
});



app.listen(port, () => {
  console.log(`Server running in2  ${port}`);
}); 