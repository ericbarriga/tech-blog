const user = require('./user');
const post = require('./post');
const comments = require('./comments');

// users can make many posts 
user.hasMany(post, {
    foreignKey: 'userId'
});

// a post can only belong to one user 
post.belongsTo(user, {
    foreignKey: 'userId'
})

// a comment can only belong to one user 
comments.belongsTo(user, {
    foreignKey: 'userId'
});

// a comment can only belong to one user 
Comment.belongsTo(post, {
    foreignKey: 'postId',

});

// users can make many comments 
user.hasMany(comments, {
    foreignKey: 'userId'
});

// users can make many posts 
post.hasMany(comments, {
    foreignKey: 'postId',
    onDelete: 'cascade'
});

module.exports = {
    user,
    post,
    comments,
}