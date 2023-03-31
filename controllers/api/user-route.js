const router = require('express').Router();
const { User } = require('../../models');

// route to get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// route to create a new user
router.post('/', async (req, res) => {
    try {
        const userData = { username: req.body.username, password: req.body.password };
        console.log(userData);
        const newUser = await User.create(userData);

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.status(200).json(newUser);
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// route to log in a user
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if (!user) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = user.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.json({ user, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// route to log out a user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;