import {Box} from '@chakra-ui/react'
import React from 'react';
import {AiOutlinePoweroff,AiOutlineWallet} from 'react-icons/ai';
import {BsPerson,BsSuitHeart} from "react-icons/bs";
import {HiClipboardList} from "react-icons/hi";
import
{
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

const Menus=({text,logout}) =>
{
 
    return (
        <Box pt={1}>
            <Menu isLazy>
                <MenuButton display={'flex'} > &nbsp; {text}</MenuButton>
                <MenuList>
                    {/* MenuItems are not rendered unless Menu is open */}
                    <MenuItem><span><HiClipboardList /></span> &nbsp; Orders</MenuItem>
                    <MenuItem><span><BsPerson /></span> &nbsp; Profile</MenuItem>
                    <MenuItem><span><AiOutlineWallet /></span> &nbsp; Wallet</MenuItem>
                    <MenuItem><span><BsSuitHeart /></span> &nbsp; Wishlist</MenuItem>
                    <MenuItem onClick={logout}><span><AiOutlinePoweroff /></span> &nbsp; Logout</MenuItem>
                   

                </MenuList>
            </Menu>
        </Box>
    )
}

export default Menus;