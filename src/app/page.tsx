import Footer from '@/components/Footer.component';
import Header from '@/components/Header.component';
import Content from '@/components/Content.component';
import React from 'react';

export default function Home() {
  return (
    <div className='min-h-screen 
                    min-w-full 
                    flex items-center justify-center
                    bg-white p-4'>
      <div className='h-screen
                       w-screen 
                       flex-col
                       bg-slate-100 
                       p-8 
                       rounded-3xl shadow-lg'>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
