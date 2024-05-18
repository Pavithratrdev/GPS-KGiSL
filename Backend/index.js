const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);

mongoose.connect('mongodb+srv://admin:admin@gps.asxgc4e.mongodb.net/?retryWrites=true&w=majority&appName=GPS', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => { 
    console.log('MongoDB connected')
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});