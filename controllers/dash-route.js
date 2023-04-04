const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('post-user-view', {
            layout: 'profile',
            posts
        });
    } catch (err) {
        res.redirect('login');
    }
});

router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });

            res.render("edit-post", {
                layout: "profile",
                post,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect("login");
    }
});

router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
        layout: "profile",
    });
});

module.exports = router;