// Module/Package declarations
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Post Model 
class Post extends Model {}

// Post Table
Post.init(
    {
        // Columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            // foreign key reference
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

// Export for External
module.exports = Post;