import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useRouter } from "next/router";
import Carouselchakra from '@/components/Carouselchakra';
import Carouseltwo from '@/components/Carouseltwo';


let Cards1 = [
   "https://images-static.nykaa.com/uploads/b09471f1-52f0-45b0-a9c3-47ddce23c514.jpg?tr=w-1200,cm-pad_resize",
   "https://images-static.nykaa.com/uploads/fde50434-efbb-47d2-a714-63d31899ee5e.jpg?tr=w-1200,cm-pad_resize",
  
   "https://images-static.nykaa.com/uploads/5f6ab699-07d8-4e04-ac5c-66a64d9e1dce.png?tr=w-1200,cm-pad_resize",
   "https://images-static.nykaa.com/uploads/4fe68dac-23b0-4658-9a7a-196f0cb46f58.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3ed8c266-9c08-4a91-85c8-fced58fe116a.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/67d168dd-a778-4e82-9fbc-8cd6a130b923.jpg?tr=w-1200,cm-pad_resize",

];

let Cards2=[
  {linkImg:"https://images-static.nykaa.com/uploads/14dab399-cf31-4731-992e-1845321187d6.jpg?tr=w-600,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize"}
]

let Cards3=[
{linkImg:"https://images-static.nykaa.com/uploads/2e8f18d5-06d0-4aab-8d8e-7644aa54023f.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/fdc3b122-62f6-436e-ab58-e4a2c5a253e3.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/a75736c9-793c-4e69-9dce-558bcd011968.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/92447a8b-4cbc-4cfa-9c65-818137cbddf7.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/c01444d8-5b41-43af-b11c-a63fc9d4d5a6.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/9716ea78-057b-46c1-a5a6-72e0741c71b8.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize"}
]

let Cards4=[
  {linkImg:"https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize"},

]

let Cards5=[
  {linkImg:"https://images-static.nykaa.com/creatives/04e860f9-53bf-4295-9b66-d30826079aa3/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/62d27b02-9538-433a-84fa-b4281f9b7984/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/6385efda-6681-4121-8d36-67f94deab92a/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/0662fd88-b6d9-447d-9000-578ed4c29295/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/3c90e4fb-4c01-4011-bacc-217b65797653/default.png?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/82506caf-d6d0-42d7-8eba-3b0cb3fc171f/default.jpg?tr=w-240,cm-pad_resize"},

]

let Cards7=[ 
{linkImg:"https://images-static.nykaa.com/creatives/21fa5704-4c46-473e-8d10-d9e8b2f454b6/default.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/creatives/754035b1-ce14-460c-bb2f-a7bb353665c1/default.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/creatives/56ebec74-3056-4a0f-b1fb-685a084c13b5/default.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/creatives/7199915c-1f48-47c9-9dd1-9b103f56c145/default.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/creatives/ae13f30b-8d24-462f-973d-735e26660bd9/default.jpg?tr=w-240,cm-pad_resize"},
{linkImg:"https://images-static.nykaa.com/creatives/76d06350-a7c8-4e3d-9237-03872888e61c/default.jpg?tr=w-240,cm-pad_resize"},]


let Cards8=[ 
  {linkImg:"https://images-static.nykaa.com/creatives/f2611b74-427b-4e32-bd4d-e4bd5b71c053/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/5914808d-206f-40f5-8973-ffb9bd89118c/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/aa2e1811-d053-4f5e-ba92-9082dceb09e9/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/655623b1-e47c-4e91-b4ae-fbd5f410d770/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/ddd730d3-19cc-46b1-887a-5317b9d57fbb/default.jpg?tr=w-240,cm-pad_resize"},
  {linkImg:"https://images-static.nykaa.com/creatives/ddb39e98-4593-4b0c-a1aa-c4c3a8dbd45e/default.jpg?tr=w-240,cm-pad_resize"},]


let Cards9=[ 
    {linkImg:"https://images-static.nykaa.com/creatives/0f3d4753-a43b-4fbc-8c54-e10de2d69ea7/default.jpg?tr=w-240,cm-pad_resize"},
    {linkImg:"https://images-static.nykaa.com/creatives/8ebe7161-61c8-459e-ae97-bf16d2e5cbe5/default.jpg?tr=w-240,cm-pad_resize"},
    {linkImg:"https://images-static.nykaa.com/creatives/8a29fae7-d00b-4be6-a3c0-9069cf0199d0/default.jpg?tr=w-240,cm-pad_resize"},
    {linkImg:"https://images-static.nykaa.com/creatives/6b680603-7c31-486f-b3eb-3b4fd8dad017/default.jpg?tr=w-240,cm-pad_resize"},
    {linkImg:"https://images-static.nykaa.com/creatives/a060b5b2-19df-4b7f-b584-69bc01808175/default.jpg?tr=w-240,cm-pad_resize"},
    {linkImg:"https://images-static.nykaa.com/creatives/a5303400-3467-496e-8f30-e430d2d659f4/default.jpg?tr=w-240,cm-pad_resize"},]
  
 let Cards10=[ 
      {linkImg:""},
      {linkImg:""},
      {linkImg:""},
      {linkImg:""},
      {linkImg:""},
      {linkImg:""},]

export default function Home()


{
  const router=useRouter()
    return (
      <div>
      <div>
        {/* <CarouselCards/> */}
        <Carouselchakra cards={Cards1}/>
      </div>
      <img
        className="sndbanner"
        src="https://images-static.nykaa.com/uploads/6fc4c05c-1646-4db9-9e82-ff61d6694dd5.gif?tr=w-1200,cm-pad_resize"
        alt="banner"
      />

      <div className="third-div">
        <img
          src="https://images-static.nykaa.com/uploads/fad4269e-a68e-4eca-9244-da27880090c7.jpg?tr=w-600,cm-pad_resize"
          alt=""
        />

        <img
          src="https://images-static.nykaa.com/uploads/68dfe730-1f4d-43d1-a6a2-ddd5694dc918.jpg?tr=w-600,cm-pad_resize"
          alt=""
        />
      </div>

      <img
        className="sndbanner"
        src="https://images-static.nykaa.com/uploads/2030f573-1d09-432d-aacb-24672ba9a0e1.jpg?tr=w-1200,cm-pad_resize"
        alt="banner"
      />

      {/* Top Brands */}

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <h1>Top brands</h1>
        <div className="homepage-cards">
          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/de60c862-c495-4488-af69-d3abdcd71652.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>UP To 40% Off</h3>
              <p>Ace Your base With Lakme</p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/81924016-df75-48bf-a2c3-494db075ce47.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>UP To 40% Off</h3>
              <p>Face Makeup That Fits Me As I Am!</p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/e53f1ac5-0e2a-4e6c-8d30-cc30f3631aca.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>UP To 25% Off</h3>
              <p>On Entire Range</p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/4adea525-7177-4d9b-91aa-4cb076224957.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>UP To 40% Off + Free Gifts</h3>
              <p>Worth ₹399 on Orders above 449 </p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/72ca6afd-b426-4519-8603-eaa9a99ecfb0.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>4 Exciting Gifts on ₹4500</h3>
              <p>Makeup For A Flawless Base</p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/6e703e63-ac79-466f-aba1-a3ee19efa1b3.png?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up To 25% Off</h3>
              <p>Kay Beauty Wedding Superstars 2023</p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/dec69649-bf21-4fcb-bf41-1765936f39f7.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up To 50% Off + Free Serum</h3>
              <p>Worth ₹799 On ₹999</p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/a960cfc1-0c8f-4a64-81e6-3b5d55514e23.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>On Rs. 3000: 3 Piece Kit</h3>
              <p>On Rs. 5000: 4 Piece Kit</p>
            </div>
          </div>

          <div className="home-subcard">
            <img
              src="https://images-static.nykaa.com/uploads/70efffa9-d871-4fc5-8715-34f00f1480bd.jpg?tr=w-400,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>NEW! Charlotte`s Magic Gifting Universe</h3>
              <p>For EVERYONE, EVERYWHERE!</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Carouseltwo passed={Cards2}/>
      </div>
      {/* Carousel */}

      <div className="pink-back">
        <div
          className="top-brands"
          onClick={() => router.push("/dynamicpage/allProductsDynamic")}
        >
          <h1>Only At Nykaa</h1>
          <div className="homepage-card last-sub">
            <div className="home-subcard last-card">
              <img
                src="https://images-static.nykaa.com/creatives/4823c068-c45e-4bf4-b030-a5f2f75b1d09/default.jpg?tr=w-400,cm-pad_resize"
                alt="img"
              />
              <div>
                <h3>Flat 10% Off + Exciting Gifts</h3>
                <p>On Best Of Global Beauty</p>
              </div>
            </div>

            <div className="home-subcard last-card">
              <img
                src="https://images-static.nykaa.com/creatives/8c0d9a97-7c88-4da8-899a-f9546375a175/default.jpg?tr=w-400,cm-pad_resize"
                alt="img"
              />
              <div>
                <h3>Upto 30% off</h3>
                <p>Comfy Panties starts at Rs.399</p>
              </div>
            </div>

            <div className="home-subcard last-card">
              <img
                src="https://images-static.nykaa.com/creatives/132cd70b-778f-4510-ab01-5ae956f7a442/default.jpg?tr=w-400,cm-pad_resize"
                alt="img"
              />
              <div>
                <h3>3 Exciting Gifts On ₹3500</h3>
                <p>The Ultimate Hydration Trio</p>
              </div>
            </div>

            <div className="home-subcard last-card">
              <img
                src="https://images-static.nykaa.com/creatives/293fbb88-1a6e-4b3e-aa0d-7e9c5a222625/default.png?tr=w-400,cm-pad_resize"
                alt="img"
              />
              <div>
                <h3>Upto 50% Off + Serum on 799</h3>
                <p>Best Of Fragrances</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <h1>Discover Our Favourites</h1>
        <img
          className="sdbanner"
          src="https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-1200,cm-pad_resize"
          alt="img"
        />
        <div className="carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}></div>
      </div>

      {/* Featured */}

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <h1>Featured Brands</h1>
        <div className="featured">
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/533cddc6-1f27-4cb6-881d-2473bc89d5ac/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Flast 10% off + </h3>
              <p>2 Gifts on ₹3000</p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/890005b6-74b6-45f2-bafc-fd5c53807a6f/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Flast 10% off + </h3>
              <p>On The Entire Range </p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/17376df9-ac03-42df-a7ad-25b7fa58a34d/default.png?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Min 20% Off</h3>
              <p>Serum of 799 on 799 </p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/9ece2199-1993-4f3d-b85d-8924e7494f60/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Upto 25% Off </h3>
              <p>On Entire Range</p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/b1c1a423-1eca-4d0e-ab9f-12c0619a48cc/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Upto 25% Off</h3>
              <p>Free ini On ₹899</p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/f1e07044-14a3-4de4-a23e-57307a7d8941/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Upto 35% Off</h3>
              <p>onEntire Range </p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/266995e4-c1a0-45c1-9c10-a43082db3f8c/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Upto 25% Off</h3>
              <p>Get Sunblock On ₹899 </p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/d439ba1f-48a3-493f-ab9d-420ac82220af/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Min 20% Off</h3>
              <p>Free Eyeliner on 699</p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/18888525-a188-4003-af9d-e778eb1e5d63/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>on $1100 </h3>
              <p>Gifts Worth ₹1050 </p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/b281fd98-075d-415f-b28b-148ba6184324/default.png?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3> 25% Off Combos</h3>
              <p>Haircare Bestsellers </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="last-sub">
        <div className="home-subcard last-card">
          <img
            src="https://images-static.nykaa.com/creatives/b211ab74-f311-408c-922f-2bed0f6f1bdf/default.jpg?tr=w-400,cm-pad_resize"
            alt="img"
          />
          <div>
            <h3>Up To 40% Off! </h3>
            <p>Just In! Vitamin Rich Goji Berry</p>
          </div>
        </div>
        <div className="home-subcard last-card">
          <img
            src="https://images-static.nykaa.com/creatives/61f1866f-af96-452c-95b6-c4b079e99a5a/default.jpg?tr=w-400,cm-pad_resize"
            alt="img"
          />
          <div>
            <h3>Minimum 15% Off</h3>
            <p>On Bestselling Korean Skincare</p>
          </div>
        </div>
      </div>

      <div className="aquad">
        <div
          className="top-brands"
          onClick={() => router.push("/dynamicpage/allProductsDynamic")}
        >
          <h1>Everyday Essentials</h1>
          <img
            className="sdbanner"
            src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-1200,cm-pad_resize"
            alt="img"
          />
        </div>
        <div className="Carousel">
          <Carouseltwo passed={Cards4}/>
        </div>
      </div>

      <div className="extra-brands">
        <h1>Categories In Focus</h1>
        <div className="extra-cards">
          <img
            src="https://images-static.nykaa.com/uploads/b6e3595f-34bd-4b39-8873-4900fbce8504.gif?tr=w-600,cm-pad_resize"
            alt="img"
          />
          <img
            src="https://images-static.nykaa.com/uploads/b12f48bb-aeca-41e9-82fe-790877b62384.jpg?tr=w-600,cm-pad_resize"
            alt="img"
          />
        </div>
      </div>

      <div className="top-brands">
        <h1>Brands You Can`t Miss</h1>
        <p>Luxe</p>

        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <Carouseltwo passed={Cards5}/>
        </div>
        <div className='Carosel' onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
          <Carouseltwo passed={Cards7}/>

        </div>
        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
          <Carouseltwo passed={Cards8}/>
        </div>
        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
          <Carouseltwo passed={Cards9}/>
        </div>
        <p>Skin</p>
        <div className="featured">
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/e7bb3d78-6d5e-4470-a4e6-a47abb2b8717/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up To 20% off</h3>
              <p>Free Lotion on ₹1299</p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/0287a22c-e104-4277-9f04-e1779889b785/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Dry Oil For</h3>
              <p>Face,Body And Hair</p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/e5ab8782-f1b0-4732-a3a8-2f2f2e089fff/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Sheet Masks</h3>
              <p>For A Radiant Glow</p>
            </div>
          </div>

          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/59223706-6530-4ec3-8d88-2acd1899a97d/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up To 53% off</h3>
              <p>On Bestsellers & Combos</p>
            </div>
          </div>
        </div>

        <p>More In Beauty</p>
        <div className="featured">
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/c79a072e-3987-43f9-941a-a450eb31c6f5/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Healthy Hair</h3>
              <p>Real Results</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/2d8933d6-f17f-481c-83c4-d7bfc93e5230/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Upto 20% Off</h3>
              <p>On Entire Range</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/8dea939b-ddba-49b4-a88c-67f6ac31fc79/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up To 30% </h3>
              <p>Buy 2, Get Extra 5% off</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/2dd6699a-67f5-4a64-ae8f-8fac8d0030df/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Trusted Brand</h3>
              <p>Trusted Quality</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/4ccaf8ed-9ee1-4ccf-a477-3554814451c1/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Flat 15% Off</h3>
              <p>On The Entire Range</p>
            </div>
          </div>
        </div>

        <div >
          
        </div>
        <p>House Of Nykaa</p>
        <div className="featured">
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/ed80b926-0604-4c82-8200-eb4220891283/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up to 50% off</h3>
              <p>As Good as Naked</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/7043f27c-a29f-433f-9f8f-199ca08c88ec/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up to 70% off</h3>
              <p>On Entire Range</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/dea1940b-569d-4038-82ff-87566ec3b85a/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up to 70% off</h3>
              <p>To match your outfit</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/2041158e-ea79-418b-900e-8342e00f9441/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up to 70% off</h3>
              <p>Ethnic motifs to glam up</p>
            </div>
          </div>
          <div className="feat-sub-card" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
            <img
              src="https://images-static.nykaa.com/creatives/a663a593-7e25-4f86-89e2-22d9f4b18d1d/default.jpg?tr=w-240,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up to 70% off</h3>
              <p>On Entire Range</p>
            </div>
          </div>
        </div>

        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}>
          <Carouseltwo passed={Cards3}/>
        </div>

        <img
          className="sdbanner"
          src="https://images-static.nykaa.com/uploads/f4c3f4d7-a236-4e7a-92f8-e5ba0417c05e.png?tr=w-1200,cm-pad_resize"
          alt=""
        />

        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}></div>
      </div>

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <h1>Game Zone</h1>
        <p>Play & Win</p>
        <img
          className="tp-img"
          src="https://images-static.nykaa.com/uploads/ea4f8daa-4cb5-484a-90f5-b0d3e2998353.png?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <h1>Gifting At Nykaa</h1>
        <p>Give The Present of Beauty</p>
        <div className="tp-subdiv">
          <img
            src="https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=w-600,cm-pad_resize"
            alt="img"
          />
          <img
            src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize"
            alt="img"
          />
        </div>
      </div>

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <h1>Discover More At Nykaa</h1>
        <p>Special Offerings</p>
        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}></div>
      </div>

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <div className="discover-more">
          <div className="home-subcard discover-card">
            <img
              src="https://images-static.nykaa.com/uploads/25a2e412-b051-4c62-8c30-c573f911d305.jpg?tr=w-600,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up To 70% Off</h3>
              <p>
                Lingere | Jwellery | Bags | Gadgets | Footwear | Watches | Home
                & Kitchen Wear
              </p>
            </div>
          </div>
          <div className="home-subcard discover-card">
            <img
              src="https://images-static.nykaa.com/uploads/6bd36536-ccf7-41e2-9d76-537dff3e2325.jpg?tr=w-600,cm-pad_resize"
              alt="img"
            />
            <div>
              <h3>Up To 50% Off</h3>
              <p>Stunning Jewels to treat yourself!</p>
            </div>
          </div>
        </div>
        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}></div>
      </div>

      <div className="top-brands" onClick={() => router.push("/dynamicpage/allProductsDynamic")}>
        <div className="discover-more">
          <div className="home-subcard discover-card">
            <img
              src="https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-600,cm-pad_resize"
              alt="img"
            />
            <div>
              <p>Catch Up On Top Trends,Expert Advice,Fresh Launches & More</p>
              <h3>Watch Now</h3>
            </div>
          </div>
          <div className="home-subcard discover-card">
            <img
              src="https://images-static.nykaa.com/uploads/a3720b61-fd58-40ff-90cd-72eb5b5ee3d4.jpg?tr=w-600,cm-pad_resize"
              alt="img"
            />
            <div>
              <p>Catch Up On Top Trends,Expert Advice,Fresh Launches & More</p>
              <h3>Read More</h3>
            </div>
          </div>
        </div>
        <div className="Carosel" onClick={()=>router.push("./dynamicpage/allProductsDynamic")}></div>
      </div>

    </div>
    )
}