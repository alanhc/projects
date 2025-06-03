import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Stack,
  HStack,
  VStack,
  Divider,
  Container,
  Center,
  Text,
  Box,
  Button,
  useColorMode,
  Flex,
  Spacer,
  useColorModeValue,
  IconButton,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaLinkedin } from "react-icons/fa";
const NavLink = (props: any) => {
  const { children, link } = props
  return (
    <Box
      as={NextLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={link}>
      {children}
    </Box>
  )
}
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  maxW?: string;
}

const Layout = ({ children, maxW = "12xl" }: LayoutProps) => {
  if (!maxW) maxW = "7xl";
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const links = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "LogA", link: "/logA" },
    { name: "Contract", link: "/about#contact" },
  ]

  return (

     <Box>{children}</Box>
  );
};
export default Layout;
