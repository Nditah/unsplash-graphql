const {gql} = require('apollo-server');

const User = gql`

    type Link {
        self:String!
        photos:String!
        portfolio:String!
        following:String!
        followers:String!
        html:String
        likes:String
    }

    type User {
        id:ID!
        username:String!
        name:String!
        profile_image:String
        bio:String
        location:String
        links:Link,
        first_name: String
        last_name: String
        email: String
        url: String
        twitter_username: String
        instagram_username: String
        portfolio_url: String
        total_likes: Int
        total_photos: Int
        total_collections: Int
        followed_by_user: Boolean
        downloads: Int
        uploads_remaining: Int
        updated_at: String
    }
`;

module.exports = User;


  