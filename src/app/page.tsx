import Footer from '@/components/Footer.component';
import Header from '@/components/Header.component';
import Content from '@/components/Content.component';
import React from 'react';
import Title from '@/components/Title.component';
import '../styles/styles.css';

export default function Home() {
  return (
    <div className='page'>
      <div className='home'>
        <Header />
        <Title><strong>Descobertas de Podcasts</strong></Title>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
