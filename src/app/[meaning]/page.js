import Header_bangla from '@/components/Header_bangla';
import Meaning from '@/components/Meaning';
import React from 'react'

const meaning = async({ params }) => {
  
    const { meaning } = await params;
    const wordParts = meaning.split('-').slice(4); // Starts from index 4 (after 'meaning')
    const word = wordParts.join(' '); // Join parts with spaces
    const language = meaning.split('-')[2];
    console.log(language, word);
  return (
    <div>
        <Header_bangla></Header_bangla>
        <Meaning language={language} word={word}></Meaning>
    </div>
  )
}

export default meaning
