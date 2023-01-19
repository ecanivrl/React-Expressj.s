import express from 'express';


const app = express();

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

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});


app.listen(port, () => {
  console.log(`Server running in  ${port}`);
}); 