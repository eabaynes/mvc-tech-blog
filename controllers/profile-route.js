const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for the user's profile
router.get('/', withAuth, async (req, res) => {
    try {
        // get all posts for the logged in user and join with user data
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });

        // serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // pass serialized data and session flag into template
        res.render('post-user-view', {
            layout: 'profile',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

// new post form
router.get('/new', withAuth, async (req, res) => {
    try {
        res.render('new-post', {
            layout: 'profile',
            });
        }
    catch (err) {
        res.redirect('login');
    }
});

// edit post form
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('edit-post', {
                layout: 'profile',
                post,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;