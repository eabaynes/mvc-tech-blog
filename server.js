// import various modules and files
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const routes = require("./controllers");
const sequelize = require("./config/connection.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// create the express app
const app = express();
// set the port
const PORT = process.env.PORT || 3001;

// set up the session
const sess = {
    secret: "Super secret secret",
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// set up the session
app.use(session(sess));

// set up the handlebars engine
const handlebars = exphbs.create({ helpers });
app.set("view engine", "handlebars");
app.engine("handlebars", handlebars.engine);

// set up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// set up the routes
app.use(routes);

// start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
});