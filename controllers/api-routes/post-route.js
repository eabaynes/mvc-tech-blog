const router = require('express').Router();
import { Post } from '../../models';
import withAuth from '../../utils/auth';

// route to create a new post
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const postData = await Post.create({ ...body, user_id: req.session.user_id });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// route to update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;