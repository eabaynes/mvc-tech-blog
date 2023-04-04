const User = require("./User.js");
const Comment = require("./Comment.js");
const Post = require("./Post.js");


// Create associations
Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

module.exports = { Comment, User, Post };