import Button from "@/components/common/Button";
import { useKBar } from "kbar";
import { Search } from "../icon";

const KBarToggleButton = () => {
  const { query } = useKBar();

  return (
    <Button width="32px" height="32px" onClick={() => query.toggle()}>
      <Search />
    </Button>
  );
};

export default KBarToggleButton;
