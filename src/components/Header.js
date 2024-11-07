// Import necessary modules
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Ensure correct import
import '../styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu visibility
    const showHideMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header_wrapper">
            <div className="content_wrapper">
                {/* Logo Section */}
                <div className="logo_div">
                    <a href="https://khmer.english-dictionary.help/">
                        <Image
                            src="https://content2.mcqstudy.com/bw-static-files/site_logo/khmer.webp"
                            alt="KHMER"
                            height={55}
                            width={192}
                            loading="lazy"
                            aria-label="https://khmer.english-dictionary.help/"
                            onError={(e) => {
                                e.currentTarget.src = 'https://content2.mcqstudy.com/bw-static-files/site_logo/khmer.png';
                            }}
                        />
                    </a>
                </div>

                {/* Search Field */}
                <div className="search_fld">
                    <form autoComplete="off" name="new_form" id="new_form">
                        <input
                            type="text"
                            id="q"
                            name="q"
                            autoComplete="off"
                            required
                            placeholder="Translate word"
                        />
                        <button type="button" className="search_btn" aria-label="search">
                            🔍
                        </button>
                        <div id="myInputautocomplete-list" className="autocomplete-items"></div>
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/read-text">Read Text</a></li>
                    <li><a href="/vocabulary-game">Vocabulary Games</a></li>
                    <li><a href="/words-everyday">Words Everyday</a></li>
                    <li><a href="/dictionary">Khmer to English Dictionary</a></li>
                    <li><a href="/favorite-words">Favorite Words</a></li>
                    <li><a href="/search-history">Word Search History</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            )}
        </div>
    );
};

export default Header;
