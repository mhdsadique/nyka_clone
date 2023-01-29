import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions";
import { useRouter } from "next/router";

export default function DynamicSingleProduct({ product_data }) {
  const dispatch = useDispatch();
  const router=useRouter()
  const handleClick=(id)=>{
    router.push(`/cartpage`)
  }
  return (
    <Card mt={10} mb={10}>
      <Box w="100%">
        <Flex gap={20}>
          <Box w="30%">
            <Image w="100%" src={product_data.image} alt="single-product" />
          </Box>

          <Box w="70%" borderLeft="1px solid grey" pl={4} pt={5}>
            <Heading size="lg" color="#fc2779" align="left">
              {product_data.title}
            </Heading>
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
                <Text>({product_data.rating})</Text>
              </Box>
            </Flex>
            <Box mt={5}>
              <Flex>
                <Box>
                  <Flex gap={2}>
                    <Text color="grey" fontSize="md">
                      MRP:
                    </Text>
                    <Text color="grey" fontSize="md" as="s">
                      {product_data.preprice}
                    </Text>
                    <Text color="black" fontSize="md">
                      ₹{product_data.price}
                    </Text>
                    <Text color="#008945">{product_data.discount}</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Text align="left">Inclusive of all Taxes</Text>
            <Box align="left" mt={4}>
              <Text color="#fc2779">
                Explore the entire range of products available on Nykaa. Browse
                and Shop through the complete range of beauty products.
              </Text>
            </Box>
            <Box pt={7} pb={5} align="left">
              <Button
                backgroundColor="#fc2779"
                variant="solid"
                color="white"
                w="30%"
                onClick={()=>handleClick()}
              >
                Add To Bag
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Card>
  );
}
