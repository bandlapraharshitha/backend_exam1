const express = require('express');
const app = express();
const PORT = 8000;

app.get('/signup', (req,res) => {
    const { username, email, password, dob} = req.query;

    if (!username) {
        return res.send("User name cannot be empty.");
    }

    if (!email) {
        return res.send("Email cannot be empty.");
    }

    if (!password || password.length<8 || password>16) {
        return res.send("Password length should be greater than 8 or less than or equal to 16");
    }

    res.send("successfull!");
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
})