"use client"
import React from 'react';
import bgone from './../public/assets/bgs/bgone.webp'
import Image from 'next/image';

const HeroPage = () => {
    return (
        <>
            <div id='bgone' className='w-full h-full' style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${bgone})`
            }}>
                <div className="w-full h-full">
                </div>
            </div>
        </>
    );
};

export default HeroPage;
