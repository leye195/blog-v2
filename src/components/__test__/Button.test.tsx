import { render } from "@testing-library/react";
import Button from "../common/Button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button>Test</Button>);
  });
});
