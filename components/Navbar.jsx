import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Container,
  Center,
  Menu,
  List,
  ListItem,
  useDisclosure,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuItem,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  AiOutlineMobile,
  AiOutlineGift,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { GoLocation, GoSearch } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Menus from "./Menu";
import { FcGoogle } from "react-icons/fc";
import Drawers from "./DrawerNoLogin";
import DrawerLogin from "./DrawerLogin";
const Navbar = () => {
  const logout = () => {
    setDetail([]);
    Setverfiy(false);
  };
  //console.log(detial,"done")
  const Nav1List = [
    {
      id: 1,
      name: "Get App",
      icon: <AiOutlineMobile />,
    },
    {
      id: 2,
      name: "Store & Events",
      icon: <GoLocation />,
    },
    {
      id: 3,
      name: "Gift Card",
      icon: <AiOutlineGift />,
    },
    {
      id: 4,
      name: "Help",
      icon: <IoIosHelpCircleOutline />,
    },
  ];
  const cancelRef = React.useRef();
  const Price = 249;
  const discount = 30;
  const shipping = 70;
  //const totalprice=((shipping+Price)-discount);
  const offerPrice = Price - discount;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [detial, setDetail] = useState([]);
  const [verfiy, Setverfiy] = useState();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(Price);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    setQuantity(e.target.value);
  };
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        console.log(respose.access_token);
        Setverfiy(true);
        setDetail([...detial, res.data]);
        if (typeof window !== "undefined") {
          // Perform localStorage action
          const dta = localStorage.setItem("dta", JSON.stringify(res.data));
          console.log(dta);
        }
      } catch (err) {
        console.log(err);
        if (typeof window !== "undefined") {
          const verifiy = localStorage.setItem("verifiy", false);
          console.log(verifiy);
        }
      }
    },
  });

  return (
    <Box>
      <Box
        width={"full"}
        h={10}
        backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2022/cms/banner/top_strip_16dec22.jpg)`}
        position={"fixed"}
        top="0"
        zIndex={999}
      >
        <Box
          display={"flex"}
          w={{ base: "100%", md: "80%", lg: "80%" }}
          m={"auto"}
          justifyContent={{ base: "space-between", md: "none" }}
          Text={2}
          alignItems={"center"}
          textAlign="center"
        >
          <Link href="#" rel="noopener noreferrer">
            <Text
              fontWeight={{ base: 650 }}
              fontSize={{ base: "11.8px", md: "14px", lg: "18px" }}
              _hover={{ color: "white" }}
              color="white"
              className="animate-pulse duration-75"
            >
              BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals
            </Text>
          </Link>
          <Menus />
          <Box display={"flex"}>
            {" "}
            {Nav1List.map((e) => {
              return (
                <Box
                  display={{ base: "none", md: "none", lg: "flex" }}
                  fontSize={{ base: "10px", md: "11px", lg: "15px" }}
                  flexDirection={{ base: "none", s: "none", md: "row" }}
                  alignItems={"center"}
                  fontWeight={{ base: 100, lg: 500 }}
                  _hover={{ color: "white" }}
                  color="white"
                  m={{ base: "0px", lg: "0rem 0.9rem" }}
                  key={e.id}
                >
                  <Text fontSize={22}>{e.icon}</Text>
                  <Text>{e.name} |</Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        position={"fixed"}
        w="100%"
        top={10}
        bgColor={"white"}
        //className="z-20"
        zIndex={999}
      >
        <Box
          w={"80%"}
          h={{ lg: 68, md: "auto", s: "auto" }}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-between"}
          fontWeight={500}
          fontSize={"16px"}
        >
          <Box
            display={{ base: "grid", lg: "flex" }}
            justifyContent={"space-evenly"}
            alignItems="center"
            gap={10}
            textAlign={"start"}
          >
            <List
              spacing={1}
              display={{ base: "grid", md: "flex", lg: "flex" }}
            >
              <Heading textAlign={"center"}>
                <Link href="/">
                  <Image w={"53px"} src="./logo.jpg" alt="lgo" />
                </Link>
              </Heading>

              <ListItem
                _hover={{ color: "white" }}
                textAlign={{ base: "start", md: "center", lg: "center" }}
              >
                <li>
                  <Link href="">
                    <div className="d">
                      <Button className="d-btn">Categories</Button>{" "}
                    </div>{" "}
                  </Link>{" "}
                </li>{" "}
              </ListItem>

              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Brands</Button>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Luxe</Button>
                  <Box className="d-content">
                    <Box className="row">
                      <Box className="column">
                        <h3>Makeup Collection Face</h3>
                        <Text>
                          <Link href="#">Foundation</Link>
                        </Text>
                        <Text>
                          <Link href="#">Compact</Link>
                        </Text>
                        <Text>
                          <Link href="#">Highlighter</Link>
                        </Text>
                        <Text>
                          <Link href="#">Setting Spray</Link>
                        </Text>
                        <Text>
                          <Link href="#">Primer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Concealer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Blush</Link>
                        </Text>
                        <Text>
                          <Link href="#">Loose Powder</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bronzer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Makeup Remover</Link>
                        </Text>
                        <Text>
                          <Link href="#">Tinted Moisturizer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Contouring</Link>
                        </Text>
                        <Text>
                          <Link href="#">BB & CC Cream</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Palette</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3>Eyes</h3>
                        <Text>
                          <Link href="#">Eye Shadow</Link>
                        </Text>
                        <Text>
                          <Link href="#">Mascra</Link>
                        </Text>
                        <Text>
                          <Link href="#">Eyliner & kajal</Link>
                        </Text>
                        <Text>
                          <Link href="#">Brows</Link>
                        </Text>
                        <Text>
                          <Link href="#">Eye Primer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Conclealer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lashes</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3>Lips</h3>
                        <Text>
                          <Link href="#">Lipstick</Link>
                        </Text>
                        <Text>
                          <Link href="#">Liquid Lipstick</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Balm</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Plumper</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Liner</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Tint</Link>
                        </Text>
                        <br />
                        <h3>Nails</h3>
                        <Text>
                          <Link href="#">Nail Polish</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nail Care</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nail Polish Remover</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3>Tools & Brushes</h3>
                        <Text>
                          <Link href="#">Face Brush</Link>
                        </Text>
                        <Text>
                          <Link href="#">Eye Brush</Link>
                        </Text>
                        <Text>
                          <Link href="#">Applicators</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Brush</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>

              <ListItem>
                <Box className="d">
                  <Button className="d-btn"> Nykaa Fashion</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3>What is new?</h3>
                        <Text>
                          <Link href="#">Recently Added</Link>
                        </Text>
                        <br />
                        <h3>Women</h3>
                        <Text>
                          <Link href="#">Indianwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Westerwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Footwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bags</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lingerie</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sportswear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sleep & Lounge</Link>
                        </Text>
                        <Text>
                          <Link href="#">Jewellery</Link>
                        </Text>
                        <Text>
                          <Link href="#">Watches</Link>
                        </Text>
                        <Text>
                          <Link href="#">Accessories</Link>
                        </Text>
                        <br />
                        <h3>Global Store</h3>
                        <br />
                        <h3>Men</h3>

                        <Text>
                          <Link href="#">Topwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bottomwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Ethnicwear</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <Text>
                          <Link href="#">Topwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bottomwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Ethnicwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Footwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Atheisure</Link>
                        </Text>
                        <Text>
                          <Link href="#">Innerwear & Sleepwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Watches</Link>
                        </Text>
                        <Text>
                          <Link href="#">Accessories</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bags</Link>
                        </Text>
                        <br />
                        <h3>Style Guide</h3>
                        <br />
                        <h3>Tech</h3>
                        <Text>
                          <Link href="#">Smart Wearables</Link>
                        </Text>
                        <Text>
                          <Link href="#">Headphones</Link>
                        </Text>
                        <Text>
                          <Link href="#">Speakers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Chargers & Cables</Link>
                        </Text>
                        <Text>
                          <Link href="#">Power Bank</Link>
                        </Text>
                        <br />
                        <h3>Kids</h3>
                        <Text>
                          <Link href="#">Westernwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Indianwear</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <Text>
                          <Link href="#">Winterwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Footwear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Toys & Games</Link>
                        </Text>
                        <Text>
                          <Link href="#">Feeding</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sportswear</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sleep & Lounge</Link>
                        </Text>
                        <br />
                        <h3>Home</h3>
                        <br />
                        <Text>
                          <Link href="#">Kitchen & Dining</Link>
                        </Text>
                        <Text>
                          <Link href="#">Decor</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bedding</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bath</Link>
                        </Text>
                        <Text>
                          <Link href="#">Storage</Link>
                        </Text>
                        <Text>
                          <Link href="#">Floor Coverings</Link>
                        </Text>
                        <Text>
                          <Link href="#">Kitchen Appliances</Link>
                        </Text>
                        <br />
                        <h3>House of Nykaa</h3>
                        <br />
                        <Text>
                          <Link href="#">Twenty Dresses By</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gajra Gang</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nykaa Feshion</Link>
                        </Text>
                        <Text>
                          <Link href="#">RSVP By Nykaa Fashion</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nykaa By Nykaa</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <Text>
                          <Link href="#">Pipa Bella</Link>
                        </Text>
                        <Text>
                          <Link href="#">IYKYK By Nykaa Fashion</Link>
                        </Text>
                        <Text>
                          <Link href="#">Kica</Link>
                        </Text>
                        <Text>
                          <Link href="#">Twig And Twine</Link>
                        </Text>
                        <Text>
                          <Link href="#">Likha By Nykaa Fashion</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gloot</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nyri</Link>
                        </Text>
                        <Text>
                          <Link href="#">Azai By Nykaa Fashion</Link>
                        </Text>
                        <br />
                        <h3>Top Brands</h3>
                        <Text>
                          <Link href="#">ONLY</Link>
                        </Text>
                        <Text>
                          <Link href="#">W</Link>
                        </Text>
                        <Text>
                          <Link href="#">Vero Moda</Link>
                        </Text>
                        <Text>
                          <Link href="#">Fabindia</Link>
                        </Text>
                        <Text>
                          <Link href="#">Na-Kd</Link>
                        </Text>
                        <Text>
                          <Link href="#">AND</Link>
                        </Text>
                        <Text>
                          <Link href="#">Revolve</Link>
                        </Text>
                        <Text>
                          <Link href="#">Label Shaurya Sanadhya</Link>
                        </Text>
                        <Text>
                          <Link href="#">Biba</Link>
                        </Text>
                        <Text>
                          <Link href="#">Koton</Link>
                        </Text>
                        <Text>
                          <Link href="#">I Saw It First</Link>
                        </Text>
                        <Text>
                          <Link href="#">Swatantra</Link>
                        </Text>
                        <Text>
                          <Link href="#">Forever New</Link>
                        </Text>
                      </Box>

                      <Box className="column">
                        <Image
                          src="https://www.nykaa.com/media/wysiwyg/2022/NF-megamenua.jpg"
                          alt="photo"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Beauty Advice</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <Image
                          src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg"
                          alt="nyka first"
                        />
                        <h3>Beauty Book</h3>
                        <Text>Nykaa Digital Magzine</Text>
                      </Box>
                      <Box className="column">
                        <Image
                          src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png"
                          alt="nyka center"
                        />
                        <h3>NYKAA TV</h3>
                        <Text>MasterClasses By Experts & Vloggers</Text>
                      </Box>
                      <Box className="column">
                        <Image
                          width={240}
                          borderRadius="5px"
                          src="https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg"
                          alt="nyka last"
                        />
                        <h3>BEAUTY BUYING GUIDES</h3>
                        <Text>Tips To Explore While You Shop</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Box>
          <Box
            w={"30%"}
            display={{ base: "grid", lg: "flex" }}
            justifyContent={"space-evenly"}
            alignItems="center"
          >
            <Box>
              <InputGroup size="md">
                <Input
                  w={{ base: 100, md: 150, lg: 200 }}
                  type="text"
                  placeholder="Search on Nykaa"
                />
                <InputLeftElement display={{ base: "grid", md: "flex" }}>
                  <GoSearch />
                </InputLeftElement>
              </InputGroup>
            </Box>

            {detial.length == 0 ? (
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="pink"
                  fontSize={{ base: 1, s: 5, md: 10 }}
                >
                  Sign in
                </MenuButton>
                <MenuList float={"left"} width={21} Text={2}>
                  <MenuGroup p={2}>
                    <Heading fontSize={20} fontWeight={400} m={"8px"}>
                      Login / Create Account
                    </Heading>
                    <Text fontSize={10} p={2}>
                      Register Now and get{" "}
                      <b>2000 Nykaa reward point instantly!</b>
                    </Text>
                    <MenuItem>
                      <Button w={"100%"} fontSize={13}>
                        <Link href="/login">Sign in with Mobile/Email</Link>
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        colorScheme="white"
                        textColor={"black"}
                        rightIcon={<AiOutlineArrowRight />}
                        w={"100%"}
                        justifyContent={"space-between"}
                        fontSize={15}
                        onClick={login}
                      >
                        <FcGoogle /> Google
                      </Button>
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            ) : (
              detial.map((e) => (
                <Box key={e}>
                  <Menus text={e.name} logout={onOpen} />
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    size="xs"
                    isCentered
                    motionPreset="slideInBottom"
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent w={"50%"}>
                        <AlertDialogHeader
                          fontSize="lg"
                          textAlign={"center"}
                          fontWeight="bold"
                        >
                          Are you sure you want logout?
                        </AlertDialogHeader>
                        <hr />
                        <AlertDialogBody display={"grid"} gap={2}>
                          <Button
                            onClick={logout}
                            bgColor={"transparent"}
                            _hover={{ bgColor: "transparent" }}
                            color="#d5418e"
                            ml={3}
                          >
                            Logout
                          </Button>
                          <hr />

                          <Button
                            onClick={logout}
                            bgColor={"transparent"}
                            _hover={{ bgColor: "transparent" }}
                            color="#d5418e"
                            ml={3}
                          >
                            Logout from all devices
                          </Button>
                          <hr />

                          <Button
                            ref={cancelRef}
                            bgColor={"transparent"}
                            _hover={{ bgColor: "transparent" }}
                            color="#d5418e"
                            onClick={onClose}
                          >
                            Cancel
                          </Button>
                        </AlertDialogBody>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Box>
              ))
            )}
            {count === 1 ? (
              <Drawers />
            ) : (
              <DrawerLogin
                verfiy={verfiy}
                handleClick={handleClick}
                offerPrice={offerPrice}
                quantity={quantity}
                Price={Price}
                price={price}
                discount={discount}
                shipping={shipping}
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
        //position={"fixed"}
        w="100%"
        mt={"96px"}
        bgColor={"white"}
      >
        <Box
          w={"80%"}
          h={{ lg: 38, md: "auto", s: "auto" }}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-between"}
          fontWeight={100}
          fontSize={"14px"}
        >
          <Box
            display={{ base: "grid", lg: "flex" }}
            justifyContent={"space-evenly"}
            alignItems="center"
            textAlign={"start"}
          >
            <List display={{ base: "grid", md: "flex", lg: "flex" }}>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Makeup</Button>
                  <Box className="d-content b-content">
                    <Box className="row">
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Face</h3>
                        <Link href="#">Face Primer</Link>
                        <Link href="#">Concealer</Link>
                        <Link href="#">Foundation</Link>
                        <Link href="#">Compact</Link>
                        <Link href="#">Contour</Link>
                        <Link href="#">Loose Powder</Link>
                        <Link href="#">Tinted Moisturizer</Link>
                        <Link href="#">Blush</Link>
                        <Link href="#">Bronzer</Link>
                        <Link href="#">BB & CC Cream</Link>
                        <Link href="#">Highlighters</Link>
                        <Link href="#">Setting Spray</Link>
                        <Link href="#">Makeup Remover</Link>
                        <Link href="#">Sindoor</Link>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Eyes</h3>
                        <Link href="#">Kajal</Link>
                        <Link href="#">Eyeliner</Link>
                        <Link href="#">Mascara</Link>
                        <Link href="#">Eye Shadow</Link>
                        <Link href="#">Eye Brow Enchancers</Link>
                        <Link href="#">Eye Primer</Link>
                        <Link href="#">False EyeLashes</Link>
                        <Link href="#">Eye Makeup Remover</Link>
                        <Link href="#">Under Eye Concealer</Link>
                        <Link href="#">Contact Lenses</Link>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>
                          Makeup Kits & Combos
                        </h3>
                        <Link href="#">Makeup Kits</Link>
                        <Link href="#">Makeup Combos</Link>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Lips</h3>
                        <Link href="#">Lipstick</Link>
                        <Link href="#">Liquid Lipstick</Link>
                        <Link href="#">Liquid Crayon</Link>
                        <Link href="#">Lip Gloss</Link>
                        <Link href="#">Lip Liner</Link>
                        <Link href="#">Lip Plumper</Link>
                        <Link href="#">Lip Stain</Link>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Nails</h3>
                        <Link href="#">Nail Polish</Link>
                        <Link href="#">Nail Art Kits</Link>
                        <Link href="#">Nail Care</Link>
                        <Link href="#">Nail Polish Remover</Link>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Tools 7 Brushes</h3>
                        <Link href="#">Face Brush</Link>
                        <Link href="#">Eye Brush</Link>
                        <Link href="#">Lip Brush</Link>
                        <Link href="#">Brush Sets</Link>
                        <Link href="#">Brush Cleaners</Link>
                        <Link href="#">Sponges & Applicators</Link>
                        <Link href="#">Eyelash Curlers</Link>
                        <Link href="#">Tweezers</Link>
                        <Link href="#">Sharpeners</Link>
                        <Link href="#">Mirrors</Link>
                        <Link href="#">Makeup Pouches</Link>
                      </Box>

                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Top Brands</h3>
                        <Link href="#">Kay Beauty</Link>
                        <Link href="#">Huda Beauty</Link>
                        <Link href="#">Charlotte Tilbury</Link>
                        <Link href="#">Maybelline New York</Link>
                        <Link href="#">LOreal Paris</Link>
                        <Link href="#">Lakme</Link>
                        <Link href="#">Nykaa Cosmetics</Link>
                        <Link href="#">Nyx Pro.Makeup</Link>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Quicj Links</h3>
                        <Link href="#">Combos @ Nykaa</Link>
                        <Link href="#">New Launches</Link>
                        <Link href="#">NFBA Nominees 2022</Link>
                        <Link href="#">Gifts @ Nykaa</Link>
                        <Link href="#">The Gift Store</Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Skin</Button>
                  <Box className="d-content">
                    <Box className="row">
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Moisturizers</h3>
                        &nbsp;
                        <Text>
                          <Link href="#">Face Moisturizer & Day</Link>
                        </Text>
                        <Text>
                          <Link href="#">Cream</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Oils</Link>
                        </Text>
                        <Text>
                          <Link href="#">Serums & Essence</Link>
                        </Text>
                        <Text>
                          <Link href="#">All Purpose Gels/Creams</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Cleaners</h3>
                        <br />
                        <Text>
                          <Link href="#">Face Wash</Link>
                        </Text>
                        <Text>
                          <Link href="#">Cleaner</Link>
                        </Text>
                        <Text>
                          <Link href="#">Micellar Water</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Wipes</Link>
                        </Text>
                        <Text>
                          <Link href="#">Makeup Remover</Link>
                        </Text>
                        <Text>
                          <Link href="#">Scrubs & Exfoilators</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Trending Searches</h3>
                        <br />
                        <Text>
                          <Link href="#">Toners Under 1000</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Wash For Oily Skin</Link>
                        </Text>
                        <Text>
                          <Link href="#">Oil Free Face</Link>
                        </Text>
                        <Text>
                          <Link href="#">Moisturizer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Balm Under 500</Link>
                        </Text>
                        <Text>
                          <Link href="#">Vitamin C Serum</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Masks</h3>
                        <br />
                        <Text>
                          <Link href="#">Sheet Masks</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sleeping Masks</Link>
                        </Text>
                        <Text>
                          <Link href="#">Masks & Peels</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Packs</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Bleach</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Toners</h3>
                        <br />
                        <Text>
                          <Link href="#">Toners & Mists</Link>
                        </Text>
                        <Text>
                          <Link href="#">Rose Water</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Body Care</h3>
                        <br />
                        <Text>
                          <Link href="#">Lotions & Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Butter</Link>
                        </Text>
                        <Text>
                          <Link href="#">Massage Oils</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shower Gels & Body</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bath Salts</Link>
                        </Text>
                        <Text>
                          <Link href="#">Wash</Link>
                        </Text>
                        <Text>
                          <Link href="#">Soaps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Scrubs & Loofahs</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Hands & Feet</h3>
                        <br />
                        <Text>
                          <Link href="#">Hand Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Foot Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hand & Foot Masks</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>
                          Specialised Skincare
                        </h3>
                        <br />
                        <Text>
                          <Link href="#">Acne Spot Correctors</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nose Strips</Link>
                        </Text>
                        <Text>
                          <Link href="#">Facial Peels</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Eye Care</h3>
                        <br />
                        <Text>
                          <Link href="#">Under Eye Cream &</Link>
                        </Text>
                        <Text>
                          <Link href="#">Serums</Link>
                        </Text>
                        <Text>
                          <Link href="#">Eye Masks</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Lip Care</h3>
                        <br />
                        <Text>
                          <Link href="#">Lip Balm</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Scrubs</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Masks</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Sun Care</h3>
                        <br />
                        <Text>
                          <Link href="#">Face Sunscreen</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Sunscreen</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>

              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Hair</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Hair Care</h3>
                        <Text>
                          <Link href="">Shampoo</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dry Shampooo</Link>
                        </Text>
                        <Text>
                          <Link href="#">Conditioner</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Oil</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Serum</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Creams & Masks</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Supplements</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Tools & Accessories</h3>
                        <Text>
                          <Link href="#">Hair Brusher</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Combs</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dryers & Stylers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Straighteners</Link>
                        </Text>
                        <Text>
                          <Link href="#">Rollers & Curles</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Extensions</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Accessories</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Hair Styling</h3>
                        <br />
                        <Text>
                          <Link href="#">Hair Color</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Spray</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gels & Waxes</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Shop By Hair Type</h3>
                        <br />
                        <Text>
                          <Link href="#">Straight</Link>
                        </Text>
                        <Text>
                          <Link href="#">Curly & Wavy</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Professional Brands</h3>
                        <br />
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Shop By Concern</h3>
                        <br />
                        <Text>
                          <Link href="#">Hairfall & Thinning</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dandruff</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dry & Frizzy Hair</Link>
                        </Text>
                        <Text>
                          <Link href="#">Split Ends</Link>
                        </Text>
                        <Text>
                          <Link href="#">Color Protection</Link>
                        </Text>
                        <br />

                        <Box className="column">
                          <h3 style={{ fontWeight: 500 }}>Trending Searches</h3>
                          <br />
                          <Text>
                            <Link href="#">Hair Growth Oil</Link>
                          </Text>
                          <Text>
                            <Link href="#">Dandruff Shampoo</Link>
                          </Text>
                          <Text>
                            <Link href="#">Castor Oil For Hair</Link>
                          </Text>
                          <Text>
                            <Link href="#">Sulphate Free Shampoo</Link>
                          </Text>
                          <Text>
                            <Link href="#">Hair Strightener</Link>
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Appliances</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Hair Styling Tools</h3>
                        <Text>
                          <Link href="#">Hair Dryers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Striaghteners</Link>
                        </Text>
                        <Text>
                          <Link href="#">Curling Iron/Stylers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Multi Stylers</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Hair Removal Tools</h3>

                        <Text>
                          <Link href="#">Epilators</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Groomers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bikini Trimmers</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Shaving Tools</h3>
                        <Text>
                          <Link href="#">Face Epliator</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dermarollers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Cleansing Brushes</Link>
                        </Text>
                        <Text>
                          <Link href="#">Acne Removal</Link>
                        </Text>
                        <br />
                        <h3 style={{ fontWeight: 500 }}>Oral Care</h3>
                        <Text>
                          <Link href="#">Electric Toothbrushes</Link>
                        </Text>
                        <Text>
                          <Link href="#">Electric Flossers</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Top Brands</h3>
                        <Text>
                          <Link href="#">FOREO</Link>
                        </Text>
                        <Text>
                          <Link href="#">Phillips</Link>
                        </Text>
                        <Text>
                          <Link href="#">ALan Truman</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dyson</Link>
                        </Text>
                        <Text>
                          <Link href="#">VEGA</Link>
                        </Text>
                        <Text>
                          <Link href="#">Braun</Link>
                        </Text>
                        <Text>
                          <Link href="#">Ikonic Professinal</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nova</Link>
                        </Text>
                        <Text>
                          <Link href="#">Flawless</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Quick Links</h3>
                        <Text>
                          <Link href="#">Combos @ Nykaa</Link>
                        </Text>
                        <Text>
                          <Link href="#">New Launches</Link>
                        </Text>
                        <Text>
                          <Link href="#">NFBA Nominees 2022</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gifts @ Nykaa</Link>
                        </Text>
                        <Text>
                          <Link href="#">Herbal Hair Care</Link>
                        </Text>
                        <Text>
                          <Link href="#">Routine Finder</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Bath & Body</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Bath & Shower</h3>
                        <Text>
                          <Link href="#">Shower Gels & Body</Link>
                        </Text>
                        <Text>
                          <Link href="#">Wash</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Scrubs & Exfoliants</Link>
                        </Text>
                        <Text>
                          <Link href="#">Soaps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bath Salts</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bath Accessories</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Ferminine Hygiene</h3>
                        <Text>
                          <Link href="#">Sanitry Napkins</Link>
                        </Text>
                        <Text>
                          <Link href="#">Menstrual Cups</Link>
                        </Text>
                        <Text>
                          <Link href="#">Tampons</Link>
                        </Text>
                        <Text>
                          <Link href="#">Pantyliners</Link>
                        </Text>
                        <Text>
                          <Link href="#">Period Panties</Link>
                        </Text>
                        <Text>
                          <Link href="#">Intimate Wash</Link>
                        </Text>
                        <Text>
                          <Link href="#">Other Period Essentials </Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Mens Grooming</h3>
                        <Text>
                          <Link href="#">Razors & Catridges</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shaving Cream, Doams &</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gels</Link>
                        </Text>
                        <Text>
                          <Link href="#">Pre & Post Shaves</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shaving & Trimmers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shaving Brush</Link>
                        </Text>
                        <Text>
                          <Link href="#">Beard & Moustache Care</Link>
                        </Text>
                        <Text>
                          <Link href="#">Intimate Care</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Hygiene Essentials</h3>
                        <Text>
                          <Link href="#">Face Mask</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hand Sanitizer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gloves, PPE & Face</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shields</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Natural</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Skin</h3>
                        <Text>
                          <Link href="#">Face Wash</Link>
                        </Text>
                        <Text>
                          <Link href="#">Cleanser</Link>
                        </Text>
                        <Text>
                          <Link href="#">Moisturizer</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Cream</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Mist</Link>
                        </Text>
                        <Text>
                          <Link href="#">Facial Kits</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Skin</h3>
                        <Text>
                          <Link href="#">Sheet Masks</Link>
                        </Text>
                        <Text>
                          <Link href="#">Masks & Peels</Link>
                        </Text>
                        <Text>
                          <Link href="#">Scrubs & Exafoliators</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Tools</Link>
                        </Text>
                        <Text>
                          <Link href="#">Face Gel</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Scurb</Link>
                        </Text>
                      </Box>{" "}
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Hair</h3>
                        <Text>
                          <Link href="#">Shampoo & Cleanser</Link>
                        </Text>
                        <Text>
                          <Link href="#">Conditioners</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Masks</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Oil</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Serum</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Color</Link>
                        </Text>
                      </Box>{" "}
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Makeup</h3>
                        <Text>
                          <Link href="#">Lipstick</Link>
                        </Text>
                        <Text>
                          <Link href="#">Kajal</Link>
                        </Text>
                        <Text>
                          <Link href="#">Eyeliner</Link>
                        </Text>
                        <Text>
                          <Link href="#">Mascara</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nail Polish</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lip Balm & Gloss</Link>
                        </Text>
                      </Box>{" "}
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Top Brands</h3>
                        <Text>
                          <Link href="#">Biotique</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lotus Herbals</Link>
                        </Text>
                        <Text>
                          <Link href="#">The Body Shop</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nykaa Naturals</Link>
                        </Text>
                        <Text>
                          <Link href="#">Kama Ayurveda</Link>
                        </Text>
                        <Text>
                          <Link href="#">Forest Essentials</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Shop By Concern</h3>
                        <Text>
                          <Link href="#">Tan Removal</Link>
                        </Text>
                        <Text>
                          <Link href="#">Pigmentation</Link>
                        </Text>
                        <Text>
                          <Link href="#">Acne Treatement</Link>
                        </Text>
                        <Text>
                          <Link href="#">Skin Lightening</Link>
                        </Text>
                        <Text>
                          <Link href="#">Anti Aging</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dark Circles</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Mom & Baby</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Baby Care</h3>
                        <Text>
                          <Link href="#">Body Wash</Link>
                        </Text>
                        <Text>
                          <Link href="#">Baby Oil</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Oil</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lotions & Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Baby Powder</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sunscreen</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Kids Care</h3>
                        <Text>
                          <Link href="#">Nutritional upplements</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Wash & Soaps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lotions & Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Care</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sunscreen</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dental Care</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Maternity Care</h3>
                        <Text>
                          <Link href="#">Stretch Mark Creams &</Link>
                        </Text>
                        <Text>
                          <Link href="#">Oils</Link>
                        </Text>
                        <Text>
                          <Link href="#">Breast Firming Gels &</Link>
                        </Text>
                        <Text>
                          <Link href="#">Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nipple Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nutritional Supplements</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Nursing & Feeding</h3>
                        <Text>
                          <Link href="#">Feeding Bottle & Nipples</Link>
                        </Text>
                        <Text>
                          <Link href="#">Teethers & Soothers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Breast Pumps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Breast Pads</Link>
                        </Text>
                        <Text>
                          <Link href="#">Cleaning & Feeding</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bibs</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Health & Wellness</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Health Supplements</h3>
                        <Text>
                          <Link href="#">Multivitamins</Link>
                        </Text>
                        <Text>
                          <Link href="#">Calcium & Vitamin D</Link>
                        </Text>
                        <Text>
                          <Link href="#">Magnesium & Zinc</Link>
                        </Text>
                        <Text>
                          <Link href="#">Omega & Fish Oil</Link>
                        </Text>
                        <Text>
                          <Link href="#">Vitamin C</Link>
                        </Text>
                        <Text>
                          <Link href="#">Other Supplements</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Sports Nutrition</h3>
                        <Text>
                          <Link href="#">Whey Protein</Link>
                        </Text>
                        <Text>
                          <Link href="#">Plant Protein</Link>
                        </Text>
                        <Text>
                          <Link href="#">BCAA & Other Muscle</Link>
                        </Text>
                        <Text>
                          <Link href="#">Support</Link>
                        </Text>
                        <Text>
                          <Link href="#">Protein & Energy Bars</Link>
                        </Text>
                        <Text>
                          <Link href="#">Protein Snacks</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Health Foods</h3>
                        <Text>
                          <Link href="#">Honey</Link>
                        </Text>
                        <Text>
                          <Link href="#">Berries</Link>
                        </Text>
                        <Text>
                          <Link href="#">Edible Seeds</Link>
                        </Text>
                        <Text>
                          <Link href="#">Oils & Ghee</Link>
                        </Text>
                        <Text>
                          <Link href="#">Herbal Tea</Link>
                        </Text>
                        <Text>
                          <Link href="#">Heakth Drinks</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Pain Relief</h3>
                        <Text>
                          <Link href="#">Muscle & Joints</Link>
                        </Text>
                        <Text>
                          <Link href="#">Ortho Oils</Link>
                        </Text>
                        <Text>
                          <Link href="#">Perios Cramps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Period Cramps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Cough & Cold</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Sexual Wellness</h3>
                        <Text>
                          <Link href="#">Condoms</Link>
                        </Text>
                        <Text>
                          <Link href="#">Lubricants</Link>
                        </Text>
                        <Text>
                          <Link href="#">Sexual Enhancers</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Men</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Shaving</h3>
                        <Text>
                          <Link href="#">Razors & Cartridges</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shavers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Trimmers</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shaving Creams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shaving Foams</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shaving Gels</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Beard Care</h3>
                        <Text>
                          <Link href="#">Beard Oil</Link>
                        </Text>
                        <Text>
                          <Link href="#">Beard Butter</Link>
                        </Text>
                        <Text>
                          <Link href="#">Beard Softener</Link>
                        </Text>
                        <Text>
                          <Link href="#">Beard Wax</Link>
                        </Text>
                        <Text>
                          <Link href="#">Bread Wash</Link>
                        </Text>
                        <Text>
                          <Link href="#">Moustache Oil</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Hair Care</h3>
                        <Text>
                          <Link href="#">Shampoo</Link>
                        </Text>
                        <Text>
                          <Link href="#">Conditioners</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Styling</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Color</Link>
                        </Text>
                        <Text>
                          <Link href="#">Hair Oils</Link>
                        </Text>
                        <Text>
                          <Link href="#">Professional Products</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Bath & Body</h3>
                        <Text>
                          <Link href="#">Bath/Shower Gels</Link>
                        </Text>
                        <Text>
                          <Link href="#">Soaps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Scrubs</Link>
                        </Text>
                        <Text>
                          <Link href="#">Talc</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dental Care</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Lotions</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Shop By Concern</h3>
                        <Text>
                          <Link href="#">Anti Dandruff</Link>
                        </Text>
                        <Text>
                          <Link href="#">Anti Damge</Link>
                        </Text>
                        <Text>
                          <Link href="#">Anti Hairfall</Link>
                        </Text>
                        <Text>
                          <Link href="#">Scalp Treatement</Link>
                        </Text>
                        <Text>
                          <Link href="#">Anti Acne</Link>
                        </Text>
                        <Text>
                          <Link href="#">Anti Ageing</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Top Brands</h3>
                        <Text>
                          <Link href="#">Beardo</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gets-By</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gilette</Link>
                        </Text>
                        <Text>
                          <Link href="#">Livon</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nivea</Link>
                        </Text>
                        <Text>
                          <Link href="#">Park Avenue</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn">Fragrance</Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Womens Fragrance</h3>
                        <Text>
                          <Link href="#">Perfumes (EDT / EDP )</Link>
                        </Text>
                        <Text>
                          <Link href="#">Body Mists / Sprays</Link>
                        </Text>
                        <Text>
                          <Link href="#">Deodorants / Roll-Ons</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Gifts & Combos</h3>
                        <Text>
                          <Link href="#">Earthy & Woody</Link>
                        </Text>
                        <Text>
                          <Link href="#">Floral</Link>
                        </Text>
                        <Text>
                          <Link href="#">Spicy & Warm</Link>
                        </Text>
                        <Text>
                          <Link href="#">Fresh & Aquatic</Link>
                        </Text>
                        <Text>
                          <Link href="#">Oud Collection</Link>
                        </Text>
                        <Text>
                          <Link href="#">Fruity</Link>
                        </Text>
                      </Box>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Skin</h3>
                        <Text>
                          <Link href="#">Nykaa Cosmetics</Link>
                        </Text>
                        <Text>
                          <Link href="#">Moi By Nykaa</Link>
                        </Text>
                        <Text>
                          <Link href="#">Dior</Link>
                        </Text>
                        <Text>
                          <Link href="#">Gucci</Link>
                        </Text>
                        <Text>
                          <Link href="#">Calvin Klein</Link>
                        </Text>
                        <Text>
                          <Link href="#">Davidoff</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box className="d">
                  <Button className="d-btn" di>
                    Pop Ups
                  </Button>
                  <Box className="d-content">
                    <Box className="row" style={{ display: "flex" }}>
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Bras</h3>
                        <Text>
                          <Link href="#">T-Shirt Bra</Link>
                        </Text>
                        <Text>
                          <Link href="#">Padded Bra</Link>
                        </Text>
                        <Text>
                          <Link href="#">Non-Padded Bra</Link>
                        </Text>
                        <Text>
                          <Link href="#">Wireless Bra</Link>
                        </Text>
                        <Text>
                          <Link href="#">Underwired Bra</Link>
                        </Text>
                        <Text>
                          <Link href="#">Strapless Bra</Link>
                        </Text>
                      </Box>{" "}
                      <Box className="column">
                        <h3 style={{ fontWeight: 500 }}>Sleep & Lounge</h3>
                        <Text>
                          <Link href="#">Sets</Link>
                        </Text>
                        <Text>
                          <Link href="#">Nightdress</Link>
                        </Text>
                        <Text>
                          <Link href="#">Babydolls</Link>
                        </Text>
                        <Text>
                          <Link href="#">Pajamsa</Link>
                        </Text>
                        <Text>
                          <Link href="#">Wraps</Link>
                        </Text>
                        <Text>
                          <Link href="#">Shorts</Link>
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
