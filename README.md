## Accessing Unsplash Api from a Node Graphql Backend

You can view the entire step by step guide on the `index.md` file. Else follow the below steps and guidelines:

For the project to run on your machine, ensure you have [Node.js](https://nodejs.org/en/) installed on your computer.


To view the completed project, follow the following steps:

1. Signup a developer Acc and Create an Application at [Unsplash](https://unsplash.com/developers)

2. Clone the repositiory and install the dependencies
   
```bash
    git clone https://github.com/Nditah/unsplash-graphql.git
    cd unsplash-graphql
    npm install 
```

1. Edit the `.env` file with your Access key from Unsplash

```env
    UNSPLASH_ACCESS_KEY=abc123
    UNSPLASH_SECRET_KEY=789xyz
```

4. Run the App, access the  Graphql Playground and test the Backend

```bash
    npm run dev
```

5. Build the React Frontend to Consume the API


### Examples of Graphql Playground Queries

```gql
query GetPhotos {
    getPhotos(page:1,perPage:3){
        image {
            url
            id
            link
            created_at
        }
        user {
            name
            username
        }
    }
}

query GetImage {
    fetchImage(photoId:"any_id"){
        image{
            url
            id 
            link 
            created_at
        }
        user {
            name
            username
        }
    }
}

query SearchPhotos{
    searchPhotos(query:"enter_any_topic", page:1, perPage:3, orientation:"portrait"){

        image {
            id
            url
            link 
            created_at
        }

        user {
            name
            username
        }

    }
}

query GetUserDetails{
    getUserDetails(username:"enter_any_username"){
        name
        username
        total_photos
    }
}


query GetUserPhotos {
    getUserPhotos(username:"enter_any_username",page:1,perPage:3,orientation:"portrait"){

        image {
            id
            url
            link 
            created_at
        }

        user {
            name
            username
        }
    }
}
```

## Attribution 

Each time you or your Developer App displays a Photo, your Developer App must attribute Unsplash, the Unsplash photographer, and contain a link back to the photographer’s Unsplash profile.

### Credit

1. [Unsplash Doc](https://unsplash.com/documentation)
2. [Unsplash-js](https://github.com/unsplash/unsplash-js)
3. [Kennedy Mwangi Article](https://www.section.io/engineering-education/consuming-unsplash-api-using-node.js-graphql-api/)

### Endpoint


URL = `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`;


| SN | Endpoint                      | Description                              |
|---|--------------------------------|------------------------------------------|
| 1 | GET /me                        | My Account                               |
| 2 | GET /users/:username           | Get a user’s public profile              |
| 3 | GET /users/:username/portfolio | Retrieve a single user’s portfolio link. |
| 4 | GET /users/:username/photos    | Get a list of photos uploaded by a user. |
| 5 | GET /photos/:id                | The photo objects returned (4) ere are abbreviated. Use 5 for details |
| 6 | GET /photos                    | Get a single page from the Editorial feed.|
| 7 | GET /photos/:id/download       | Track download for analytis T&C           |
| 8 | GET /search/photos             | Get a single page of photo results for a query.|


#### Photo Query Param: GET /photos

| param | 	Description|
|-------|--------------|
| username | 	The user’s `username`. Required.|
| page | 	Page number to retrieve. (Optional; default: 1)|
| per_page | 	Number of items per page. (Optional; default: 10)|
| order_by | 	How to sort the photos. Optional. (Valid values: `latest`, `oldest`, `popular`, `views`, `downloads`; default: `latest`)|
| stats | 	Show the stats for each user’s photo. (Optional; default: `false`)|
| resolution | 	The frequency of the stats. (Optional; default: `days`)|
| quantity | 	The amount of for each stat. (Optional; default: `30`)|
| orientation | 	Filter by photo orientation. Optional. (Valid values: `landscape`, `portrait`, `squarish`)|


#### Search Query Param:  GET /search/photos

| param| 	Description   |
| -----|------------------|
| query| 	Search terms.|
| page| 	Page number to retrieve. (Optional; default: 1)|
| per_page| 	Number of items per page. (Optional; default: 10)|
| order_by| 	How to sort the photos. (Optional; default: `relevant`). Valid values are `latest` and `relevant`.|
| collections| 	Collection ID(‘s) to narrow search. Optional. If multiple, comma-separated.|
| content_filter| 	Limit results by content safety. (Optional; default: `low`). Valid values are `low` and `high`.|
| color| 	Filter results by color. Optional. Valid values are: `black_and_white`, `black`, `white`, `yellow`, `orange`, `red`, `purple`, `magenta`, `green`, `teal`, and `blue`.|
| orientation| 	Filter by photo orientation. Optional. (Valid values: `landscape`, `portrait`, `squarish`)|
| lang | Default English: `en`|


### Sample User

```json
const user = {
    "id": "pXhwzz1JtQU",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "username": "jimmyexample",
    "first_name": "James",
    "last_name": "Example",
    "twitter_username": "jimmy",
    "portfolio_url": null,
    "bio": "The user's bio",
    "location": "Montreal, Qc",
    "total_likes": 20,
    "total_photos": 10,
    "total_collections": 5,
    "followed_by_user": false,
    "downloads": 4321,
    "uploads_remaining": 4,
    "instagram_username": "james-example",
    "location": null,
    "email": "jim@example.com",
    "links": {
      "self": "https://api.unsplash.com/users/jimmyexample",
      "html": "https://unsplash.com/jimmyexample",
      "photos": "https://api.unsplash.com/users/jimmyexample/photos",
      "likes": "https://api.unsplash.com/users/jimmyexample/likes",
      "portfolio": "https://api.unsplash.com/users/jimmyexample/portfolio"
    }
  }


 const photoList = [
  {
    "id": "LBI7cgq3pbM",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 5245,
    "height": 3497,
    "color": "#60544D",
    "blur_hash": "LoC%a7IoIVxZ_NM|M{s:%hRjWAo0",
    "likes": 12,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "user": {
      "id": "pXhwzz1JtQU",
      "username": "poorkane",
      "name": "Gilbert Kane",
      "portfolio_url": "https://theylooklikeeggsorsomething.com/",
      "bio": "XO",
      "location": "Way out there",
      "total_likes": 5,
      "total_photos": 74,
      "total_collections": 52,
      "instagram_username": "instantgrammer",
      "twitter_username": "crew",
      "profile_image": {
        "small": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128"
      },
      "links": {
        "self": "https://api.unsplash.com/users/poorkane",
        "html": "https://unsplash.com/poorkane",
        "photos": "https://api.unsplash.com/users/poorkane/photos",
        "likes": "https://api.unsplash.com/users/poorkane/likes",
        "portfolio": "https://api.unsplash.com/users/poorkane/portfolio"
      }
    },
    "current_user_collections": [ // The *current user's* collections that this photo belongs to.
      {
        "id": 206,
        "title": "Makers: Cat and Ben",
        "published_at": "2016-01-12T18:16:09-05:00",
        "last_collected_at": "2016-06-02T13:10:03-04:00",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "cover_photo": null,
        "user": null
      },
      // ... more collections
    ],
    "urls": {
      "raw": "https://images.unsplash.com/face-springmorning.jpg",
      "full": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg",
      "regular": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/LBI7cgq3pbM",
      "html": "https://unsplash.com/photos/LBI7cgq3pbM",
      "download": "https://unsplash.com/photos/LBI7cgq3pbM/download",
      "download_location": "https://api.unsplash.com/photos/LBI7cgq3pbM/download"
    }
  },
  // ... more photos
]

const photo = {
  "id": "Dwu85P9SOIk",
  "created_at": "2016-05-03T11:00:28-04:00",
  "updated_at": "2016-07-10T11:00:01-05:00",
  "width": 2448,
  "height": 3264,
  "color": "#6E633A",
  "blur_hash": "LFC$yHwc8^$yIAS$%M%00KxukYIp",
  "downloads": 1345,
  "likes": 24,
  "liked_by_user": false,
  "public_domain": false,
  "description": "A man drinking a coffee.",
  "exif": {
    "make": "Canon",
    "model": "Canon EOS 40D",
    "name": "Canon, EOS 40D",
    "exposure_time": "0.011111111111111112",
    "aperture": "4.970854",
    "focal_length": "37",
    "iso": 100
  },
  "location": {
    "city": "Montreal",
    "country": "Canada",
    "position": {
      "latitude": 45.473298,
      "longitude": -73.638488
    }
  },
  "tags": [
    { "title": "man" },
    { "title": "drinking" },
    { "title": "coffee" }
  ],
  "current_user_collections": [ // The *current user's* collections that this photo belongs to.
    {
      "id": 206,
      "title": "Makers: Cat and Ben",
      "published_at": "2016-01-12T18:16:09-05:00",
      "last_collected_at": "2016-06-02T13:10:03-04:00",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "cover_photo": null,
      "user": null
    },
    // ... more collections
  ],
  "urls": {
    "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
    "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
    "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
    "html": "https://unsplash.com/photos/Dwu85P9SOIk",
    "download": "https://unsplash.com/photos/Dwu85P9SOIk/download"
    "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
  },
  "user": {
    "id": "QPxL2MGqfrw",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "username": "exampleuser",
    "name": "Joe Example",
    "portfolio_url": "https://example.com/",
    "bio": "Just an everyday Joe",
    "location": "Montreal",
    "total_likes": 5,
    "total_photos": 10,
    "total_collections": 13,
    "links": {
      "self": "https://api.unsplash.com/users/exampleuser",
      "html": "https://unsplash.com/exampleuser",
      "photos": "https://api.unsplash.com/users/exampleuser/photos",
      "likes": "https://api.unsplash.com/users/exampleuser/likes",
      "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
    }
  }
}


const SearchResult = {
  "total": 133,
  "total_pages": 7,
  "results": [
    {
      "id": "eOLpJytrbsQ",
      "created_at": "2014-11-18T14:35:36-05:00",
      "width": 4000,
      "height": 3000,
      "color": "#A7A2A1",
      "blur_hash": "LaLXMa9Fx[D%~q%MtQM|kDRjtRIU",
      "likes": 286,
      "liked_by_user": false,
      "description": "A man drinking a coffee.",
      "user": {
        "id": "Ul0QVz12Goo",
        "username": "ugmonk",
        "name": "Jeff Sheldon",
        "first_name": "Jeff",
        "last_name": "Sheldon",
        "instagram_username": "instantgrammer",
        "twitter_username": "ugmonk",
        "portfolio_url": "http://ugmonk.com/",
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
          "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
          "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
        },
        "links": {
          "self": "https://api.unsplash.com/users/ugmonk",
          "html": "http://unsplash.com/@ugmonk",
          "photos": "https://api.unsplash.com/users/ugmonk/photos",
          "likes": "https://api.unsplash.com/users/ugmonk/likes"
        }
      },
      "current_user_collections": [],
      "urls": {
        "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
        "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
        "html": "http://unsplash.com/photos/eOLpJytrbsQ",
        "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
      }
    },
    // more photos ...
  ]
}


  ```
