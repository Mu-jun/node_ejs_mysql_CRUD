const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const listRouter = require('./routes/list');
const createRouter = require('./routes/create');
const updateRouter = require('./routes/update');
const detailRouter = require('./routes/detail');

let sequelize = require('./models/index').sequelize;
sequelize.sync();

const app = express();


app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser());
app.use(
    session({
        key: "loginData",
        secret: "testSecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24
        }
    })
);
app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/write', (req, res)=>res.render('pages/write'))
    .get('/', (req, res)=>res.redirect('/list/1'))
    .use('/update', updateRouter)
    .use('/detail', detailRouter)
    .use('/list', listRouter)
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
