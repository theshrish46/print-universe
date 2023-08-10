'use client';
import React from 'react';
import bgone from './../public/assets/bgs/bgone.png';
import Image from 'next/image';
import Link from 'next/link';

const HeroPage = () => {
    return (
        <>
            <div id='bgone' className='w-full h-[33rem] flex justify-start items-center px-10'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h3 className='mb-8 text-5xl text-white'>My Name, My Pride</h3>
                        <p className='mb-6 text-2xl text-white'>100 Visiting cards at Rs 180</p>
                        <Link href={'#'} className='mb-6 bg-white px-8 py-4 rounded-3xl'>
                            Shop Now
                        </Link>
                        <p className='my-6 text-white text-xs'>Weather condition may affect the delivery timelines.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroPage;
