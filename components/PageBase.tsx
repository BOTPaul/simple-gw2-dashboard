import { useContext, useMemo } from "react";
import { ToolbarContext } from "components/toolbar/Toolbar";
import { ContainerBase } from "components/ContainerBase";
import { Box } from "@chakra-ui/react";

export const PageBase: React.FC = ({ children }) => {
  const { height } = useContext(ToolbarContext);
  const pageHeight = useMemo(() => `calc(100% - ${height}px)`, [height]);

  return (
    <Box py="8" height={pageHeight} overflowY="auto">
      <ContainerBase>
        {children}
      </ContainerBase>
    </Box>
  );
};
