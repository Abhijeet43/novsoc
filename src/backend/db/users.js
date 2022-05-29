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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://adarshbalika.netlify.app",
    bookmarks: [],
    bio: "I am adarsh balika.. Learning Web Dev",
    following: [
      {
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johnDoe",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
      },
    ],
    followers: [
      {
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
    ],
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://www.google.co.in",
    bookmarks: [],
    bio: "An aspiring web developer",
    following: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
      },
      {
        firstName: "James",
        lastName: "Sheldon",
        username: "jamie",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
      },
      {
        firstName: "Peter",
        lastName: "Watson",
        username: "piet",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
      },
    ],
    followers: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
      },
      {
        firstName: "Bruce",
        lastName: "Clarke",
        username: "clarky",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
      },
    ],
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://www.google.co.in",
    bookmarks: [],
    bio: "Aritist and Musician",
    followers: [
      {
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
      },
    ],
    following: [
      {
        firstName: "Peter",
        lastName: "Watson",
        username: "piet",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
      },
    ],
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://www.google.co.in",
    bookmarks: [],
    bio: "Business Analyst and Foodie",
    followers: [
      {
        firstName: "James",
        lastName: "Sheldon",
        username: "jamie",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
      },
    ],
    following: [
      {
        firstName: "James",
        lastName: "Sheldon",
        username: "jamie",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
      },
    ],
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://www.google.co.in",
    bookmarks: [],
    bio: "A Gym enthusiast, A footaball player and Motivational Speaker",
    followers: [
      {
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
      {
        firstName: "Bruce",
        lastName: "Clarke",
        username: "clarky",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
      },
      {
        firstName: "Johnson",
        lastName: "Charles",
        username: "johns24",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
      },
    ],
    following: [
      {
        firstName: "Johnson",
        lastName: "Charles",
        username: "johns24",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
      },
    ],
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://www.google.co.in",
    bookmarks: [],
    bio: "Artist and Graphic Designer",
    followers: [
      {
        firstName: "John",
        lastName: "Doe",
        username: "johnDoe",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
      },
      {
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
    ],
    following: [],
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    website: "https://www.google.co.in",
    bookmarks: [],
    bio: "Life Coach and Swimming Instructor",
    followers: [],
    following: [
      {
        firstName: "Johnson",
        lastName: "Charles",
        username: "johns24",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
      },
      {
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
      },
    ],
  },
];
