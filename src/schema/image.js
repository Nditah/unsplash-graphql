const {gql} = require('apollo-server');


const Image = gql`

    # type Link {
    #     self:String!
    #     html:String
    #     download:String
    # }

    type Image {
        id:ID!
        created_at:String!
        description:String
        alt_description:String
        url:String
        link:String
    }
    
`;

const ImageResponse = gql`

    type ImageResponse {
        image:Image,
        user:User
    }
    
`;

module.exports = {
    Image,
    ImageResponse
};