let initialState = {
  links: [
    { id: 1, url: "/", linkName: "Profile" },
    { id: 2, url: "/messages", linkName: "Messages" },
    { id: 3, url: "/news", linkName: "News" },
    { id: 4, url: "/music", linkName: "Music" },
    { id: 5, url: "/settings", linkName: "Settings" },
  ],
  friends: [
    {
      id: 1,
      name: "Alex",
      url: "https://i.pinimg.com/474x/2f/b9/13/2fb9135aeca1d7ed9d9112035ab91754.jpg",
    },
    {
      id: 2,
      name: "Andry",
      url: "https://i.pinimg.com/236x/8d/be/20/8dbe2091b0bbee50cf55fac6bf58f4ab.jpg",
    },
    {
      id: 3,
      name: "Sveta",
      url: "https://i.pinimg.com/736x/c2/9b/b5/c29bb54202c2e8c282dea2be23d15e68.jpg",
    },
  ],
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;
