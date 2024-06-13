import Footer from '@/components/Footer.component';
import Header from '@/components/Header.component';
import Content from '@/components/Content.component';
import React from 'react';
import '../styles/styles.css';

export default function Home() {
  return (
    <div className='page'>
      <div className='home'>
        <Header />
        <strong><h1 className='ml-[80px] text-xl'>TODOS OS SEUS PODCASTS EM UM SÓ LUGAR</h1></strong>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
