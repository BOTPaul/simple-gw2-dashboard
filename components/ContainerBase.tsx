import { Container, ContainerProps } from "@chakra-ui/react";

export const ContainerBase: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
      <Container maxW="container.lg" {...props}>
        { children }
      </Container>
  );
};
