import { css } from "styled-components";
import { paletteColor } from "./variable";

const base = css`
  * {
    box-sizing: border-box;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  p {
    line-height: 1.7;
  }

  ul {
    list-style: unset;
  }

  #nprogress .bar {
    height: 3px;
    background-color: ${paletteColor.blue200};
  }

  .humbleicons {
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    align-self: center;
    vertical-align: middle;
    margin-top: -0.1em;
  }
`;

export default base;
