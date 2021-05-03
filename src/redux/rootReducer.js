import { combineReducers } from "redux";
import aboutMeReducer from "./AboutMe/aboutMeReducer";
import educationReducer from "./Education/EducationReducer";
import projectReducer from "./Projects/projectRedcucer";

export default combineReducers({
  Projects: projectReducer,
  Education: educationReducer,
  AboutMe: aboutMeReducer,
});
