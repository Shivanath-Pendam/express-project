const express = require('express');
const path = require('path');

const friendRouter = require('./routes/friends.router');
const messageRouter = require('./routes/message.router');
const { title } = require('process');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends are very Clever',
        caption: 'Let\'s go to skiing!'
    })
});
app.use('/friends', friendRouter);

app.use('/messages', messageRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})