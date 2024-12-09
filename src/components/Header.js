// Import necessary modules
"use client";
import Link from 'next/link';
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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/read-text">Read Text</Link></li>
                    <li><Link href="/vocabulary-game">Vocabulary Games</Link></li>
                    <li><Link href="/words-everyday">Words Everyday</Link></li>
                    <li><Link href="/dictionary">Khmer to English Dictionary</Link></li>
                    <li><Link href="/favorite-words">Favorite Words</Link></li>
                    <li><Link href="/search-history">Word Search History</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Header;
