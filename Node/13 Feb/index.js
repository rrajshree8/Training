const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('home', { content: 'profile' });
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
