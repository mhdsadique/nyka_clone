import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Flex,
  Button,
  Text,
  Card,
  Select,
} from "@chakra-ui/react";
  import { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleProduct";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

import Link from "next/link";

const   AllProducts = ({ pro_data }) => {
  let limit = 12;
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [perPageProds, setPerPageProds] = useState([]);
  const [showBtns, setShowBtns] = useState([]);
  const [startBtn, setStartBtn] = useState(1);
  const [endBtn, setEndBtn] = useState(5);
  const [newProducts, setNewProducts] = useState([]);
  const [isSorted, setIsSorted] = useState();
  const [selectedSort, setSelectedSort] = useState("");

  const makeListFunc = () => {
    let lis = [];
    for (let i = startBtn; i <= endBtn; i++) {
      lis.push(i);
    }
    setShowBtns(lis);
  };

  useEffect(() => {
    makeListFunc();
  }, [numPages, startBtn]);

  useEffect(() => {
    let end = limit * page;
    let start = end - limit;
    console.log(start, end);
    setPerPageProds(pro_data.slice(start, end));
  }, [page]);

  useEffect(() => {
    setNumPages(Math.ceil(pro_data.length / limit));
  }, []);

  const pageHandler = (value) => {
    setPage(value);
  };

  const nextHandler = () => {
    setPage(page + 1);
    if (page >= 5) {
      setStartBtn(startBtn + 1);
      setEndBtn(endBtn + 1);
    }
  };

  const prevHandler = () => {
    setPage(page - 1);
    if (page > 5) {
      setStartBtn(startBtn - 1);
      setEndBtn(endBtn - 1);
    }
  };

  const filterHandler = (value) => {};

  const selectHandler = (e) => {
    setSelectedSort(e.target.value);
  };

  useEffect(() => {
    console.log(selectedSort);
    if (selectedSort == "highToLow") {
      setNewProducts(
        perPageProds.sort((a, b) => {
          return b.price - a.price;
        })
      );
      // console.log(perPageProds);
    } else {
      setNewProducts(
        perPageProds.sort((a, b) => {
          return a.price - b.price;
        })
      );
    }
  }, [selectedSort]);

  // useEffect(() => {
  //   !!newProducts.length && setPerPageProds(newProducts);
  // }, [newProducts, isSorted]);

  return (
    <>
      <Box w="100%" m="auto" align="center" p={5}>
        <Image
          src="https://images-static.nykaa.com/uploads/d470e061-8d08-455c-8651-7de67ff104f0.gif"
          alt="cover image"
          borderRadius="lg"
        ></Image>
        <Heading color="#fc2779" m="5">
          All Products
        </Heading>
      </Box>
      <Box w="100%">
        <Box pb={20}>
          <Flex>
            <Box w="20%" borderWidth="1px" borderRadius="lg" m="auto">
              <Select
                placeholder="Select a Category to Filter"
                onChange={(e) => filterHandler(e.target.value)}
              >
                <option value="lipstick">Lipstick</option>
                <option value="eyeliner">Eye Liner</option>
                <option value="nailpant">Nail Paint</option>
              </Select>
            </Box>
            <Box w="20%" borderWidth="1px" borderRadius="lg" m="auto">
              <Select
                placeholder="Sort By Price"
                value={selectedSort}
                onChange={selectHandler}
              >
                <option value="highToLow">High To Low</option>
                <option value="lowToHigh">Low To High</option>
              </Select>
            </Box>
          </Flex>
        </Box>
        <Box w="70%" borderWidth="1px" borderRadius="lg" m="auto" p={5}>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            {perPageProds.map((prod) => {
              return (
                <Card key={prod.id}>
                  <GridItem w="100%">
                    <SingleProduct data={prod} />
                  </GridItem>
                </Card>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Box width="50%" m="auto" pt={10} pb={10}>
        <Box ml={30}>
          <Flex gap={5}>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={prevHandler}
              isDisabled={page == 1}
            >
              <FcPrevious color="#fc2779" />
            </Button>
            {showBtns.map((el) => {
              return (
                <Button
                  backgroundColor={page == el ? "#fc2779" : "gray"}
                  borderRadius="50%"
                  color="white"
                  key={el}
                  onClick={() => {
                    pageHandler(el);
                  }}
                >
                  {el}
                </Button>
              );
            })}

            <Button
              colorScheme="teal"
              variant="outline"
              onClick={nextHandler}
              isDisabled={endBtn == numPages}
            >
              <FcNext color="#fc2779" />
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://nykaa-mock-api-6or1.onrender.com/product`);
  const data = await res.json();
  //   console.log(data);

  return {
    props: {
      pro_data: data,
    },
  };
}

export default AllProducts;
