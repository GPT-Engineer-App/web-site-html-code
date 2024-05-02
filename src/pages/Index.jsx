import { Box, Text, Button, Image } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Box textAlign="center" fontSize="xl" p={5}>
      <Text mb={4} fontSize="3xl" fontWeight="bold">
        Добро пожаловать на наш сайт!
      </Text>
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1670833912523-b38081274755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWxjb21lJTIwaW1hZ2V8ZW58MHx8fHwxNzE0Njc5NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Welcome Image" mb={4} />
      <Button leftIcon={<FaHome />} colorScheme="teal" variant="solid">
        Начать
      </Button>
    </Box>
  );
};

export default Index;
