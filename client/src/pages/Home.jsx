import React from 'react';
import { Image } from '../components';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <h2 className="text-2xl text-3xl italic">Some Products...</h2>
      <div className="flex justify-center gap-2 md:gap-[8vh] py-[20vh]">
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
}
