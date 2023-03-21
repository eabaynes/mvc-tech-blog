const Comment = require("./Comment.js");
const Post = require("./Post.js");
const User = require("./User.js");

// create associations
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});