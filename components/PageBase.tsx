import { useContext, useMemo } from "react";
import { ToolbarContext } from "components/toolbar/Toolbar";
import { ContainerBase } from "components/ContainerBase";
import { Box, BoxProps } from "@chakra-ui/react";

export const PageBase: React.FC<BoxProps> = ({ children, ...props }) => {
  const { height } = useContext(ToolbarContext);
  const pageHeight = useMemo(() => `calc(100% - ${height}px)`, [height]);

  return (
    <Box height={pageHeight} overflowY="auto" {...props}>
      { children }
    </Box>
  );
};
