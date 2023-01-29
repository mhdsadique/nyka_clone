import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { addToCart } from "@/redux/actions";

export default function SingleProduct({ data, onclick }) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Card size="md">
      <CardBody>
        <Image
          src={data.image}
          alt="productImage"
          borderRadius="sm"
          boxSize="170px"
          m="auto"
          onClick={() => router.push(`./${data.id}`)}
        />
        <Box h={10} mt={5} align="center">
          <Text fontSize="sm" align="center" as="b">
            {data.title}
          </Text>
        </Box>
        <Box mt={4}>
          <Flex>
            <Box>
              <Flex gap={2}>
                <Text color="grey" fontSize="md">
                  MRP:
                </Text>
                <Text color="grey" fontSize="md" as="s">
                  {data.preprice}
                </Text>
                <Text color="black" fontSize="md">
                  {data.price}
                </Text>
              </Flex>
            </Box>
            <Box ml="auto">
              <Text color="#008945">{data.discount}</Text>
            </Box>
          </Flex>
        </Box>
        <Box w="50%" m="auto" align="center">
          <Flex gap={3}>
            <Box mt={4}>
              <Flex gap={2}>
                <StarIcon boxSize={3} />
                <StarIcon boxSize={3} />
                <StarIcon boxSize={3} />
                <StarIcon boxSize={3} />
              </Flex>
            </Box>
            <Box mt={2.5}>
              <Text>({data.rating})</Text>
            </Box>
          </Flex>
        </Box>
        <Box w="100%" backgroundColor="white" mt={5}>
          <Flex gap={4}>
            <Box backgroundColor="white" mr={5} w="20%">
              <Image
                src="https://www.shareicon.net/data/2017/02/15/878857_pink_512x512.png"
                alt="wishlist"
                w="80%"
              ></Image>
            </Box>
            <Box w="80%">
              <Button
                backgroundColor="#fc2779"
                w="100%"
                mr={0}
                color="white"
                onClick={() => {
                  dispatch(addToCart(data));
                }}
              >
                Add To Bag
              </Button>
            </Box>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}
