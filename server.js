// import needed modules
const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// set up handlebars.js engine with custom helpers
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// set up routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
});