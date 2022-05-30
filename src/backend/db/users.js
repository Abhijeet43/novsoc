import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
    website: "https://adarshbalika.netlify.app",
    bio: "I am adarsh balika.. Learning Web Dev",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
        firstName: "John",
        lastName: "Doe",
        username: "johnDoe",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  /*****************************************2*******************************************/

  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    password: "user123",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
    website: "https://www.google.co.in",
    bio: "An aspiring web developer",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "James",
        lastName: "Sheldon",
        username: "jamie",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
        firstName: "Peter",
        lastName: "Watson",
        username: "piet",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
        firstName: "Bruce",
        lastName: "Clarke",
        username: "clarky",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
      },
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  /*****************************************3*******************************************/

  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
    firstName: "John",
    lastName: "Doe",
    username: "johnDoe",
    password: "johnDoe123",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
    website: "https://www.google.co.in",
    bio: "Aritist and Musician",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
      },
    ],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
        firstName: "Peter",
        lastName: "Watson",
        username: "piet",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
      },
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  /*****************************************4*******************************************/

  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
    firstName: "Johnson",
    lastName: "Charles",
    username: "johns24",
    password: "john245",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
    website: "https://www.google.co.in",
    bio: "Business Analyst and Foodie",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "James",
        lastName: "Sheldon",
        username: "jamie",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
      },
    ],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "James",
        lastName: "Sheldon",
        username: "jamie",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
      },
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  /*****************************************5*******************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
    firstName: "James",
    lastName: "Sheldon",
    username: "jamie",
    password: "jamie234",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
    website: "https://www.google.co.in",
    bio: "A Gym enthusiast, A footaball player and Motivational Speaker",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
        firstName: "Bruce",
        lastName: "Clarke",
        username: "clarky",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
        firstName: "Johnson",
        lastName: "Charles",
        username: "johns24",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
      },
    ],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
        firstName: "Johnson",
        lastName: "Charles",
        username: "johns24",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
      },
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  /*****************************************6*******************************************/

  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
    firstName: "Peter",
    lastName: "Watson",
    username: "piet",
    password: "watto123",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
    website: "https://www.google.co.in",
    bio: "Artist and Graphic Designer",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
        firstName: "John",
        lastName: "Doe",
        username: "johnDoe",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
    ],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  /*****************************************7*******************************************/

  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
    firstName: "Bruce",
    lastName: "Clarke",
    username: "clarky",
    password: "brucl789",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
    website: "https://www.google.co.in",
    bio: "Life Coach and Swimming Instructor",
    followers: [],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
        firstName: "Johnson",
        lastName: "Charles",
        username: "johns24",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
