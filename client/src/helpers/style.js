import jss from "jss";

export const styleCreator = (styles) => {
  return jss.createStyleSheet(styles).attach().classes
}