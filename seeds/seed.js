import sequelize from '../config/connection';
import { User, Post, Comment } from '../models';

import userData from './userData.json';
import postData from './postData.json';
import commentData from './commentData.json';

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData);

    await Post.bulkCreate(postData);

    await Comment.bulkCreate(commentData);

    process.exit(0);
};

seedDatabase();