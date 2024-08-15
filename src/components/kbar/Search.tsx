import { useState } from "react";
import { useKBar } from "kbar";
import { cn } from "@/libs/utils";

const KBarSearch = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState("");
  const { query, search, actions, currentRootActionId } = useKBar((state) => ({
    search: state.searchQuery,
    currentRootActionId: state.currentRootActionId,
    actions: state.actions,
  }));

  return (
    <input
      className={cn(
        "outline-none border-none bg-transparent",
        "px-5 py-3.5 w-full box-border",
        "placeholder:focus:opacity-100 placeholder:focus:transition-opacity"
      )}
      ref={query.inputRefSetter}
      value={value}
      placeholder="Cmd (or Ctrl) + K to toggle"
      onChange={(event) => {
        props.onChange?.(event);
        query.setSearch(event.target.value);
        setValue(event.target.value);
      }}
      onKeyDown={(event) => {
        if (currentRootActionId && !search && event.key === "Backspace") {
          const parent = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent);
        }
      }}
    />
  );
};

export default KBarSearch;
