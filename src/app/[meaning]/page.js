import Header_bangla from '@/components/Header_bangla';
import Meaning from '@/components/Meaning';
// import { notFound } from 'next/navigation';
import React from 'react'

const meaning = async({ params }) => {
  
    const { meaning } = await params;
    const wordParts = meaning.split('-').slice(4); // Starts from index 4 (after 'meaning')
    const word = wordParts.join(' '); // Join parts with spaces
    const language = meaning.split('-')[2];
    // console.log(language);
    // console.log(word);

    if (!language || !word) {
      // notFound();
      return <p>Invalid language or word</p>;
    }

  return (
    <div>
        <Header_bangla></Header_bangla>
        <Meaning language={language} word={word}></Meaning>
    </div>
  )
}

export default meaning
