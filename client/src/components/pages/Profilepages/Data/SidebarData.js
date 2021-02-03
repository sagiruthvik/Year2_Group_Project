import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Orders',
    path: '/Profile/Orders',
    icon: <GiIcons.GiShoppingBag />,
    cName: 'nav-text'
  },
  {
    title: 'Favourites',
    path: '/Profile/Favourites',
    icon: <MdIcons.MdFavorite />,
    cName: 'nav-text'
  },
  {
    title: 'Payments',
    path: '/Profile/Payments',
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text'
  },
  {
    title: 'Addresses',
    path: '/Profile/Addresses',
    icon: <FaIcons.FaLocationArrow />,
    cName: 'nav-text'
  },
  {
    title: 'Mydetails',
    path: '/Profile/Mydetails',
    icon: <MdIcons.MdFavorite />,
    cName: 'nav-text'
  },
];
