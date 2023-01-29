import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";




export default function Admin() {
  const [title, setTitle] = useState("");

  const [image, setImage] = useState("");
  const [preprice, setPreprice] = useState(0);
  const [disc, setDisc] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const handlechange = {
    id: Date.now(),
    quantity: 0,
    title,
    price,
    image,
    rating,
    preprice,
  };


  const post = async () => {
    let res = await axios.post("http://localhost:8080/admindata", handlechange);
    setTitle("");
    setPrice(0);
    setImage("");
    setPreprice(null);
  };

  const origprice = () => {
    let x = preprice * (disc / 100);
    setPrice(preprice - x);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Admin Pannel
          </Heading>
        
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Original Price</FormLabel>
                  <Input
                    type="number"
                    value={preprice}
                    onChange={(e) => {
                      setPreprice(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Discount</FormLabel>
              <Input
                type="number"
                value={disc}
                onChange={(e) => {
                  setDisc(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Offer Price</FormLabel>
              <InputGroup>
                <Input type="number" value={price} />
                <InputLeftElement h={"full"}>
                  <Button onClick={() => origprice()}>%</Button>
                </InputLeftElement>
              </InputGroup>
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Product Category</FormLabel>
                  <Input
                    type="text"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Rating</FormLabel>
                  <Input
                    type="number"
                    value={rating}
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Product Image</FormLabel>
              <Input
                type="text"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                onClick={() => {
                  post();
                }}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Add New Product
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}




