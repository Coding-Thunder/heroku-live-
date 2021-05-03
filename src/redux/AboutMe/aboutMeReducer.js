const INITIAL_STATE = {
  aboutme: {
    name: "Frontend developer",
    description_small:
      "I'm 'Vinay Maheshwari' borned 2000 december 12ve. I'd learned to code on my own, create on my own, learn on my own and I'm sure that I'll make it to the extreme hights of the success on my own",
    myimage:
      "https://scontent.fdel5-1.fna.fbcdn.net/v/t1.6435-9/s1080x2048/177435187_278906227225161_4332693956359369178_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Gu3PL9TzIVMAX_skdhe&_nc_ht=scontent.fdel5-1.fna&tp=7&oh=c7e77e564d57613f440ccbcefb08085b&oe=60AA62F1",
    bigintro1: `Hello myself Vinay Maheshwari Knowledgeable Front End Developer adept at
      creating successful websites that meet customer needs. Specializing in
      collaborating with clients to gather requirements, produce plans and
      improve designs for usability and functionality. Fully proficient in
      HTML5, CSS3 and SASS JavaScript is a plus. Enthusiastic UI developer
      eager to contribute to team success through hard work, attention to
      detail and excellent organizational skills. Clear understanding of
      developing new user facing features and managing them . Motivated to
      learn, grow and excel in IT industry.`,
    bigintro2: `        I'm a commerce student but skilled in front-end development I belong to
    a completely Non-It background but I always had a interest in the full
    stack development such as MERN stack and MEAN stack. So currently I'm
    following the roadmap of being a full stack developer I'd done some
    project as well click here to see them as well if you want to see them
    go to the projects page`,
    bigintro3: `
    There is term used amongst developer "Procrastination" stop
    procrastinating and wasting time so It's not a task for me to be
    established but It's my hobby I code everyday, I create everyday, I
    Learn everyday and I think everyday and It's my hobby
    `,
  },
};

const aboutMeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default aboutMeReducer;
