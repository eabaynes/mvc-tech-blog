import Comment from "./Comment.js";
import { belongsTo, hasMany } from "./Post.js";
import User from "./User.js";

// create associations
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});