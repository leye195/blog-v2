import { KBarAnimator, KBarPortal, KBarPositioner } from "kbar";

import styled from "styled-components";
import { paletteColor } from "@/styles/variable";
import BackDrop from "@/components/common/BackDrop";
import KBarResult from "@/components/kbar/Result";
import KBarSearch from "@/components/kbar/Search";

const StyledKBarAnimator = styled(KBarAnimator)`
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  color: ${paletteColor.white50};
  background-color: ${paletteColor.white};
  box-shadow: -1px 3px 11px ${paletteColor.white50};
`;

const StyledPositioner = styled(KBarPositioner)`
  z-index: 1;
`;

const KBarComponent = () => {
  return (
    <KBarPortal>
      <BackDrop />
      <StyledPositioner>
        <StyledKBarAnimator>
          <KBarSearch />
          <KBarResult />
        </StyledKBarAnimator>
      </StyledPositioner>
    </KBarPortal>
  );
};

export default KBarComponent;
