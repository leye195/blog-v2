import FloatingButton from "@/components/common/FloatingButton";
import useScrollValue from "@/hooks/useScrollValue";

const useScrollUp = () => {
  const { y } = useScrollValue();

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return {
    y,
    handleToTop,
    FloatingButton,
  };
};

export default useScrollUp;
