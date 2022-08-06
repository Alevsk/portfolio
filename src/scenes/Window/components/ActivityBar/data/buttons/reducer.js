import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faWordpress,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { SELECT } from "./actions";

const initialState = [
  { id: "explorer", icon: faCopy, selected: true },
  { id: "wordpress", icon: faWordpress, url: "https://www.alevsk.com" },
  {
    id: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/alevsk/",
  },
  { id: "github", icon: faGithub, url: "https://github.com/alevsk" },
  { id: "twitter", icon: faTwitter, url: "https://twitter.com/alevskey" },
  { id: "telegram", icon: faTelegram, url: "https://telegram.me/alevsk" },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT:
      return state.map((button) => {
        return {
          ...button,
          selected: button.id === action.payload.id && !button.selected,
        };
      });
    default:
      return state;
  }
};

export const getButtons = (state) => {
  return [...state];
};

export const getSelectedButton = (state) => {
  const selected = state.filter((button) => button.selected);
  return selected.length > 0 ? selected[0] : null;
};
