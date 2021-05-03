const INITIAL_STATE = {
  education: [
    {
      key: "education1",
      title: "B.COM Bachelor's Programme",
      educationDescription:
        " I am currently pursuing my final year bachelor's degree and examination are starting from 15th of April 2021. We had Business Mathematics as a main subject in the second year of the program, I am doing it from School Of Open Learning  Delhi University New Delhi correspondence  or you can say distance learning I choose distance learning for a reason and that is to learn other things and I'm successfully succeeding in the same my graduation will be completing soon and then I'll prepare for Masters degree in Computer Application",
    },
    {
      key: "education2",
      title: "Certified In Python Programming ",
      educationDescription:
        "You'll definitely shock to hear that it's the Python 3 language which derived me into programming and all this thing. I still remember that  I do followed a software engineer on Instagram who had worked at eBay he gave me his course for free on python programming which made me understand core things about programming I mean that 'how to think' nature finally, after 6 months of hard work and solving almost one assignment per day I got my certification although python took me into machine learning things so I had also practised machine learning models such as linear regression, k-nearest neighbour and all but I found machine learning is not satisfying me so I ended up bieng with web development at the end it's the UI development which fascinates me",
    },
    {
      key: "education3",
      title: "Higher Secondary 12th",
      educationDescription:
        " I had completed my higher secondary with a major in accountancy with a commerce stream the subjects we got taught in higher secondary was Accountancy for Partnership firms, Accounting for Companies, Ratio Analysis, Informatics Practises It was a main subject for computer application in which we got taught about the networking systems, operating systems, Java Programming building GUI using java, subjects like Business Studies and Financial Management was also taught. so I also have a general understanding of core management principles as well, after reading this you might have got a thought that what a commerce guy doing in the IT sector out of the line well answer is as clear as water hat I took for a better professional as well as financial life but I didn't saw it in the commerce thing plus I found it very boring to sit and adjust bills, funds on a daily basis. I choose web development as a career because it provides progressive opportunities and good financial growth *I STILL EXPECT THAT* and I like it as well, It's kinda fascinating to me ",
    },
  ],
};

const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default educationReducer;
