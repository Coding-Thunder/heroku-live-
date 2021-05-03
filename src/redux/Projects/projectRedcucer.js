const INITIAL_STATE = {
  projects: [
    {
      alt: "Amazon Clone",
      projectName: "Amazon Clone",
      key: "project1",
      projectLink: "https://coding-thunder.github.io/AmazonClone/",
      projectLogoLink: "http://pngimg.com/uploads/amazon/amazon_PNG6.png",
      projectDescription:
        "This project is built completly with React JS,Context API and Material UI I'd used Context API to store user's state click to see",
    },
    {
      alt: "Netflix Clone",
      projectName: "Netflix CLone",
      key: "project2",
      projectLink: " https://coding-thunder.github.io/NewNetflixClone/",
      projectLogoLink:
        "     data:image/png;base64,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",
      projectDescription:
        " This project is built completly with React JS,Redux and Material UI I'd used Redux in order to store user state in the redux click to see",
    },
    {
      alt: "LinkedIn Clone",
      projectName: "LinkedIn CLone",
      key: "project3",
      projectLink: "https://coding-thunder.github.io/Linked-In-Clone-React-/",
      projectLogoLink:
        "     https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png",
      projectDescription:
        " This project is built completly with React JS,Redux and Material UI I'd used Redux in order to store user state in the redux I'd used react-flip-move library firebase for authentication and database click to see",
    },
    {
      alt: "Older Portfolio",
      projectName: "Previous Portfolio",
      key: "project4",
      projectLink: "https://coding-thunder.github.io/My-Portfolio-Website-/",
      projectLogoLink:
        "   https://scontent.fdel5-1.fna.fbcdn.net/v/t1.6435-9/175951112_275777474204703_665625646042222733_n.png?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=NmIFMqexPMUAX89UGZb&_nc_ht=scontent.fdel5-1.fna&oh=f585298bb3e88f1c0c27c1286594e464&oe=60A6AE2A",
      projectDescription:
        " This is the most first professional project of my life I'd completed it with a help of a tutorial the resources I had used in this are font awesome and some js cdns click to see",
    },
  ],
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;
