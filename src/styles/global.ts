import { createGlobalStyle } from "styled-components";
import base from "./base";
import normalize from "./normalize";

const global = createGlobalStyle`
  ${normalize}
  ${base}
`;

export default global;
