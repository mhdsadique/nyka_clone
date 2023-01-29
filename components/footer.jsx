import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Flex
        border={"2px solid pink"}
        borderRadius={"10px"}
        alignItems={"center"}
        justify="center"
        m={"auto"}
        bg={"pink.100"}
        width="93%"
        height={"100px"}
      >
        <Text fontSize={"md"} color="gray.600">
          Please be careful of fraudulent calls & SMSes! Nykaa will never call
          you with offers pertaining to free gifts or prizes or ask for payments
          through links.
        </Text>
      </Flex>
      <Box mt={"25px"} width={"100%"} h="40px" bg={"gray.100"}></Box>

      <Box width={"100%"} bg={"gray.700"}>
        <SimpleGrid
          margin={"auto"}
          padding="30px"
          width={"80%"}
          columns={[2, 2, 3]}
          spacing="50px"
          color={"white"}
        >
          <Box>
            <Text as="h5" size="sm" fontWeight={"500"}>
              <i
                style={{ fontSize: "23px" }}
                className="fa fa-envelope"
                aria-hidden="true"
              ></i>{" "}
              Get special discount on your inbox
            </Text>
            <br />
            <Flex alignItems={"center"} >
              <Input
                width={"180px"}
                borderRadius={"none"}
                color={"white"}
                border={"none"}
                borderBottom={"1px solid white"}
                placeholder="Your Email"
              />
              <Button
                ml={"10px"}
                borderRadius={"none"}
                colorScheme="White"
                variant="outline"
              >
                Send
              </Button>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems={"center"} gap="10px">
                <i
                style={{ fontSize: "35px" }}
                className="fa fa-mobile"
                aria-hidden="true"
              ></i>{" "}
            <Text as="h5" size="sm" fontWeight={"500"}>
              EXPERIENCE THE NYKAA MOBILE APP
            </Text>
            </Flex>
            <Flex alignItems={"center"}>
            <Image
              width={"150px"}
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=fr"
              alt="avtar"
            />
            <Image borderRadius={"6px"} width={"120px"} src="https://e7.pngegg.com/pngimages/2/670/png-clipart-logo-app-store-font-brand-product-app-store-play-store-text-logo.png" alt="avtar" />
            </Flex>
          </Box>
          <Box>
            <Flex alignItems={"center"} gap="10px">
               <i
                style={{ fontSize: "35px" }}
                className="fa fa-phone"
                aria-hidden="true"
              ></i>{" "}
            <Text as="h5" size="sm" fontWeight={"500"}>
              FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444
            </Text>
            </Flex>
            <Text ml={"40px"} as="h5" size="sm">
              (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box width={"100%"} bg={"gray.600"}>
        <SimpleGrid
          margin={"auto"}
          padding="70px"
          width={"80%"}
          columns={[2, 3, 5]}
          spacing="50px"
          color={"white"}
        >
          <Flex flexDir={"column"} gap="14px">
            <Text  as="h4" fontStyle={"italic"} fontSize="xl">
              Nykaa
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}}  as="h5" fontSize="sm">
              Careers
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Authenticity
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Press
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Testimonials
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Nykaa CSR
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Responsible Disclosure
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Investor Relation
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="14px">
            <Text  as="h4" fontSize="xl">
              Help
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Contact Us
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Frequently asked questions
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Store Locator
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Cancellation & Return
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Shipping & DElivery
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Sell on Nykaa
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="14px">
            <Text  as="h4" fontSize="xl">
              Inspire me
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Beauty Book
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Nykaa TV
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Nykaa Network
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Buying Guides
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm"></Text>
          </Flex>
          <Flex flexDir={"column"} gap="14px">
            <Text  as="h4" fontSize="xl">
              Quick Links
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Offer Zone{" "}
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              New Launches
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Nykaa Man
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Nykaa Fashion
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Nykaa Pro
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="14px">
            <Text  as="h4" fontSize="xl">
              Top Categories
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Makeup
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Skin
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Hair
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Bath & Body
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Appliances
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Mom and Baby
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Wellness
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Fragrance
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Nature
            </Text>
            <Text _hover={{color:"rgb(228, 21, 152)"}} as="h5" fontSize="sm">
              Luxe
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box bg="gray.100">
        <SimpleGrid margin={"auto"}
          padding="70px"
          width={"80%"}
          columns={[2, 3, 5]}
          spacing="50px">
          <Flex gap="10px">
            <Flex  justifyContent={"center"} fontSize="30px" color={"white"} alignItems={"center"} bg={"rgb(228, 21, 152)"} borderRadius="50%" w="50px" h={"50px"}><i className="fa fa-truck" aria-hidden="true"></i></Flex>
            <Box>
            <Text as="h4" fontSize="md">FREE SHIPPING</Text>
            <Text as="h5" fontSize="sm">On Orders Above Rs.299</Text>
            </Box>
          </Flex>
          <Flex gap="10px">
          <Flex  justifyContent={"center"} fontSize="25px" color={"white"} alignItems={"center"} bg={"rgb(228, 21, 152)"} borderRadius="50%" w="50px" h={"50px"}><i className="fa fa-check-circle-o" aria-hidden="true"></i></Flex>
            <Box>
            <Text as="h4" fontSize="md">EASY RETURNS</Text>
            <Text as="h5" fontSize="sm">15-Day Return Policy</Text>
            </Box>
          </Flex>
          <Flex gap="10px">
           <Flex  justifyContent={"center"} fontSize="20px" color={"white"} alignItems={"center"} bg={"rgb(228, 21, 152)"} borderRadius="50%" w="55px" h={"50px"}><i className="fa fa-shirtsinbulk" aria-hidden="true"></i></Flex>
            <Box>
            <Text as="h4" fontSize="md">100% AUTHENTIC</Text>
            <Text as="h5" fontSize="sm">Products Sourced Directly</Text>
            </Box>
          </Flex>
          
          <Flex gap="10px">
          <Flex  justifyContent={"center"} fontSize="20px" color={"white"} alignItems={"center"} bg={"rgb(228, 21, 152)"} borderRadius="50%" w="50px" h={"50px"}><i className="fa fa-tag" aria-hidden="true"></i></Flex>
            <Box>
            <Text as="h4" fontSize="md">1900+ BRANDS</Text>
            <Text as="h5" fontSize="sm">1.2 Lakh Products</Text>
            </Box>
          </Flex>
          <Box>
          <Text as="h4" fontSize="sm">Show us some love <i className="fa fa-heart" aria-hidden="true"></i> on social media</Text>
          <Flex gap={"20px"}>
          <Flex  justifyContent={"center"} fontSize="12px" color={"white"} alignItems={"center"} bg={"black"} borderRadius="50%" w="20px" h={"20px"}><i className="fa fa-instagram" aria-hidden="true"></i></Flex>
          <Flex  justifyContent={"center"} fontSize="12px" color={"white"} alignItems={"center"} bg={"black"} borderRadius="50%" w="20px" h={"20px"}><i className="fa fa-facebook" aria-hidden="true"></i></Flex>
          <Flex  justifyContent={"center"} fontSize="12px" color={"white"} alignItems={"center"} bg={"black"} borderRadius="50%" w="20px" h={"20px"}><i className="fa fa-youtube-play" aria-hidden="true"></i></Flex>
          <Flex  justifyContent={"center"} fontSize="12px" color={"white"} alignItems={"center"} bg={"black"} borderRadius="50%" w="20px" h={"20px"}><i className="fa fa-twitter" aria-hidden="true"></i></Flex>
          <Flex  justifyContent={"center"} fontSize="12px" color={"white"} alignItems={"center"} bg={"black"} borderRadius="50%" w="20px" h={"20px"}><i className="fa fa-pinterest-p" aria-hidden="true"></i></Flex>
          </Flex>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bg={"rgb(228, 21, 152)" } >
        <Flex justifyContent={"Center"} gap="20px" margin="auto" padding="16px" width={"50%"}>
          <Text color={"white"} fontSize={"sm"}>Terms & Condition</Text>
          <Text color={"white"} fontSize={"sm"}>Shipping Policy</Text>
          <Text color={"white"} fontSize={"sm"}>Cancellation Policy</Text>
          <Text color={"white"} fontSize={"sm"}>Privacy Policy</Text>
        </Flex>
        <Flex justifyContent="center" padding={"10px"}>
          <Text color={"white"} fontSize={"sm"}>© 2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved. </Text>
        </Flex>
      </Box>
      <Box  bg="gray.100" h="40px"></Box>
    </Box>
  );
};

export default Footer;