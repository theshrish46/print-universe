import React from 'react';
import {
  BsFillPrinterFill,
  BsFillFolderFill,
  BsFolderFill,
} from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgLogOff, CgProfile } from 'react-icons/cg';
import { TbDeviceLandlinePhone } from 'react-icons/tb';

import logo from './../public/assets/logo/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div
        className='w-full mx-auto px-4 mb-10 mt-5
            flex items-center justify-around
            '
      >
        <div
          className='flex justify-center items-center
                    gap-3 mr-8
                '
        >
          <Image src={logo} className='w-52 h-10' />
        </div>
        <div
          className='
                    w-5/12 mx-4
                '
        >
          <input
            type='search'
            placeholder='Search'
            className='
                        px-4 py-3 placeholder:italic focus:outline-none
                        border-2 border-gray-500 rounded-md w-full
                    '
          />
        </div>
        <div
          className='
                    mx-4
                '
        >
          <ul className='flex justify-between items-center w-full'>
            <li className='flex justify-around items-center gap-3 mx-4 cursor-pointer hover:underline'>
              <TbDeviceLandlinePhone className='w-8 h-8' />
              <div className='flex flex-col'>
                <span className='text-sm'>Help Is Here</span>
                <span className='text-xs'>1234 5678 9012</span>
              </div>
            </li>

            <li className='flex justify-around items-center gap-3 mx-4 cursor-pointer hover:underline'>
              <BsFolderFill className='w-6 h-6' />
              <div className='flex flex-col text-sm'>
                <span>My Project</span>
              </div>
            </li>

            <li className='flex justify-around items-center gap-3 mx-4 cursor-pointer hover:underline'>
              <CgProfile className='w-6 h-6' />
              <div className='flex flex-col text-sm'>
                <span>Sign In</span>
              </div>
            </li>

            <li className='flex justify-around items-center gap-3 mx-4 cursor-pointer'>
              <AiOutlineShoppingCart className='w-6 h-6' />
              <div className='flex flex-col text-sm'>
                <span>Cart</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
