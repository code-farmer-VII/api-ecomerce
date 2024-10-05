// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use the user routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
