// Import necessary modules
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Ensure correct import
import '../styles/Header_bangla.css';

const Header_bangla = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchWord, setSearchWord] = useState(''); // State for search input
    const router = useRouter();

    // Handle change in search input
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchWord(value); // Update input value
        console.log("handleSearchChange function");
    };

    // Handle search form submission
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submission
        // console.log("handle search function");
        if (searchWord.trim()) {
            console.log(searchWord);
            const formattedQuery = searchWord.trim().replace(/\s+/g, '-');
            // console.log("formattedQuery");
            // console.log(formattedQuery);
            const targetUrl = `/english-to-bengali-meaning-${formattedQuery}`; // Construct the URL
            // console.log(targetUrl);
            const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
            searchHistory.unshift(formattedQuery);

            if (searchHistory.length > 5) {
                searchHistory.pop(); // Remove the oldest word if there are more than 5
            }
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

            setSearchWord(''); // Clear the input
            router.replace(targetUrl); // Navigate to the target URL
        }
    };

    // Toggle menu visibility
    const showHideMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header_wrapper">
            <div className="content_wrapper">
                {/* Logo Section */}
                <div className="logo_div">
                    <a href="https://www.bdword.com/">
                        <Image
                            src="https://content2.mcqstudy.com/bw-static-files/site_logo/bengali.webp"
                            alt="BDWORD"
                            height={55}
                            width={192}
                            loading="lazy"
                            aria-label="https://www.bdword.com/"
                            onError={(e) => {
                                e.currentTarget.src = 'https://content2.mcqstudy.com/bw-static-files/site_logo/bengali.png';
                            }}
                        />
                    </a>
                </div>

                {/* Search Field */}
                <div className="search_fld">
                    <form onSubmit={handleSearch} className={`search_field`}>
                        <input
                            type="text"
                            placeholder="Translate word"
                            value={searchWord} // Controlled input
                            onChange={handleSearchChange} // Update input value
                            required
                        />
                        <button type="submit" className="search_btn" aria-label="search">
                            🔍
                        </button>
                    </form>
                </div>

                {/* Hamburger Icon */}
                <div className="header_nav_collapse">
                    <FaBars onClick={showHideMenu} className="hamburger-icon" />
                </div>
            </div>

            {/* Navigation Menu */}
            {menuOpen && (
                <ul className="menu">
                    <li><a href="https://www.bdword.com/" aria-label="https://www.bdword.com/">Home</a></li>
                    <li><a href="https://www.bdword.com/english-to-bengali-read-text-with-translation"
                        aria-label="https://www.bdword.com/english-to-bengali-read-text-with-translation">Read
                        Text</a></li>
                    <li><a href="https://www.bdword.com/english-to-bengali-dictionary-vocabulary-game"
                        aria-label="https://www.bdword.com/english-to-bengali-dictionary-vocabulary-game">Vocabulary
                        Games</a></li>
                    <li><a href="https://www.bdword.com/english-to-bengali-dictionary-learn-ten-words-everyday"
                        aria-label="https://www.bdword.com/english-to-bengali-dictionary-learn-ten-words-everyday">Words
                        Everyday</a></li>
                    <li><a href="https://www.bdword.com/bengali-to-english-dictionary"
                        aria-label="https://www.bdword.com/bengali-to-english-dictionary"
                        title="Bangla to English Dictionary">Bangla to
                        English Dictionary</a></li>
                    <li><a href="https://www.bdword.com/english-to-bengali-dictionary-favourite-words"
                        title="Browse Favorite Words">Favorite Words</a></li>
                    <li><a href="https://www.bdword.com/english-to-bengali-dictionary-search-history"
                        title="Browse Word Search History">Word Search History</a></li>
                    <li><a href="https://www.bdword.com/english-to-bengali-dictionary-browse-all-blogs"
                        title="Blogs List">Blogs</a></li>
                    <li><a href="https://www.bdword.com/english-to-bengali-dictionary-contact-us">Contact</a></li>
                </ul>
            )}
        </div>
    );
};

export default Header_bangla;
