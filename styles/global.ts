import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body {
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
p,
h1 {
  margin: 0;
}
p {
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 1px;
}
`;
