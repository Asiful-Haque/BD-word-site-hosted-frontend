import fs from "fs";
import path from "path";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Meaning.css";
import { notFound, redirect } from "next/navigation";
import SearchList from "./Search_list";
import SpeakButton from "./SpeakButton";
import Head from "next/head";
import AdSense from "./AdSense";



const Meaning = async ({ language, word }) => {
  // fetching data from api
  const result = await fetch(
    `http://localhost:5000/english-to-${language}-meaning-${word}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!result.ok) {
    // notFound();
    return redirect(`http://localhost:3000/wrong?word=${word}`);
  }
  const meaningData = await result.json();

  const { width, height } = meaningData.result;
  const imageBaseUrl = "https://content2.mcqstudy.com/ba2/";
  const imgSrcWebp = `${imageBaseUrl}${word.toUpperCase()}.webp`;
  const imgSrcJpg = `${imageBaseUrl}${word.toUpperCase()}.JPG`;

  const imgSrcPathWebp = path.join(process.cwd(), "public", imgSrcWebp);
  // const imgSrcPathJpg = path.join(process.cwd(), 'public', imgSrcJpg);

  let finalSrc = imgSrcJpg;
  if (fs.existsSync(imgSrcPathWebp)) {
    finalSrc = imgSrcWebp;
  }
  

  const details = meaningData.result.details;
  const partsOfSpeechValues = meaningData.result_secondary.data.eng;
  const examples = meaningData.result_secondary.data.examples;
  const phrases = meaningData.result_secondary.data.phrase;
  const synonyms = meaningData.result_secondary.data.syn;
  const antonyms = meaningData.result_secondary.data.anto;
  // const ss_res = meaningData.ss_result;
  const data = meaningData.ss_result;
  return (
    <div className="hero-container">
      {/* Left Part */}
      <div className="left-part">
        <div className="left-part-up-down">
          <fieldset className="left-fieldset">
            <legend className="hero-title">
              Bdword.Com | English to Bangla Dictionary
            </legend>
            <h1 className="headforit">
              English to Bangla Meaning of{" "}
              <span style={{ color: "blue", fontWeight: "bolder" }}>
                {" "}
                {word}{" "}
              </span>
              - {meaningData.result.mean}
            </h1>
            <SpeakButton word={word}></SpeakButton>
            <hr className="styled-line" />
            <h1 className="act-meaning">{meaningData.result.mean}</h1>
          </fieldset>
        </div>
        {/* -----------------------------------Image------------------------------------------ */}
        {height !== 0 && width !== 0 && (
          <div className="image-container" id="imageContainer">
            <label>Bangla Academy Ovidhan :</label>
            <div className="dic-img">
              <div className="dic_img">
                <Image
                  src={finalSrc}
                  alt={word}
                  height={height}
                  width={width}
                  title={word}
                  layout="responsive"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
        {/* -----------------------------------Image close------------------------------------ */}
        {/* -----------------------------------Details---------------------------------------- */}
        <hr className="styled-line" />
        <div className="details-container">
          {details &&
            Object.keys(details).length > 0 &&
            Object.entries(details).map(
              ([key, value]) =>
                key !== "_id" &&
                key !== "result" &&
                value && ( // Check if value exists and is not null
                  <div key={key} className="detail-item">
                    <h2
                      style={{
                        color: "black",
                        fontWeight: "bolder",
                        marginBottom: "6px",
                      }}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h2>
                    {Array.isArray(value) ? (
                      <p>{value.join(", ")}</p> // Join array elements with commas
                    ) : (
                      <p>{value}</p>
                    )}
                  </div>
                )
            )}
        </div>
        {/* -----------------------------------Details close--------------------------------- */}
        {/* -----------------------------------Two button------------------------------------ */}
        {meaningData.result.prev && meaningData.result.nex && (
          <div className="two-button">
            {/* Previous Button */}
            <Link
              href={`/english-to-${language}-meaning-${meaningData.result.prev}`}
            >
              <button className="btn1">
                <span>&larr; Previous</span>
              </button>
            </Link>

            {/* Next Button */}
            <Link
              href={`/english-to-${language}-meaning-${meaningData.result.nex}`}
            >
              <button className="btn2">
                <span>Next &rarr;</span>
              </button>
            </Link>
          </div>
        )}
        <hr className="styled-line" />
        {/* -----------------------------------Two button close----------------------------- */}
        {/* -----------------------------------1----------------------------- */}
        {partsOfSpeechValues && (
          <div className="defination">
            <div className="headline">
              <h2 className="headline-h1">Definitions of {word} in English</h2>
            </div>
            <div className="response">
              {Object.entries(partsOfSpeechValues).map(([key, value]) => (
                <div key={key}>
                  <h4 className="Heading">{key}</h4>
                  {/* Check if value is an array */}
                  {Array.isArray(value) ? (
                    value.map((item, index) => (
                      <p className="p-text" key={index}>
                        ({index + 1}){" "}
                        {typeof item === "string" && item.length > 0
                          ? item.charAt(0).toUpperCase() + item.slice(1)
                          : "No data available"}
                      </p>
                    ))
                  ) : /* Check if value is an object */
                  typeof value === "object" && value !== null ? (
                    Object.entries(value).map(
                      ([nestedKey, nestedValue], index) => (
                        <div key={nestedKey}>
                          <p className="p-text">
                            ({index + 1}){" "}
                            {nestedValue.charAt(0).toUpperCase() +
                              nestedValue.slice(1)}
                            .
                          </p>
                        </div>
                      )
                    )
                  ) : /* Check if value is a string */
                  typeof value === "string" ? (
                    <p className="p-text">{value}</p>
                  ) : (
                    "No data available"
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* -----------------------------------1----------------------------- */}
        {/* -----------------------------------2----------------------------- */}
        {examples && (
          <div className="examples">
            <div className="headline">
              <h2 className="headline-h1">Examples of {word} in English</h2>
            </div>
            <div className="example-response">
              {examples.map((item, index) => (
                <div key={index}>
                  <p className="p-text">
                    ({index + 1}){" "}
                    {[item.charAt(0).toUpperCase() + item.slice(1)]
                      .join("")
                      .split(" ")
                      .map((text, i) =>
                        text.toLowerCase() === word.toLowerCase() ? (
                          <strong key={i}>{text} </strong>
                        ) : (
                          <span key={i}>{text} </span>
                        )
                      )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* -----------------------------------2----------------------------- */}
        {/* -----------------------------------3----------------------------- */}
        {phrases && (
          <div className="related-phrase-container">
            <div className="headline">
              <h2 className="headline-h1">Related phrases of {word}</h2>
            </div>
            <div className="phrases">
              {phrases.map((item, index) => (
                <div key={index} className="each-phrase">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* -----------------------------------3----------------------------- */}
        {/* -----------------------------------4----------------------------- */}
        {synonyms && (
          <div className="syno-anto-container">
            <div className="headline">
              <h2 className="headline-h1">synonyms of {word}</h2>
            </div>
            <div className="syno">
              {Object.entries(synonyms).map(([key, value]) =>
                Array.isArray(value)
                  ? value.map((item, index) => (
                      <div key={index} className="each-syno">
                        <p>{item}</p>
                      </div>
                    ))
                  : Array.isArray(synonyms)
                  ? synonyms.map((item, index) => (
                      <div key={index} className="each-syno">
                        <p>{item}</p>
                      </div>
                    ))
                  : "No data available"
              )}
            </div>
          </div>
        )}

        {antonyms && (
          <div className="syno-anto-container">
            <div className="headline">
              <h2 className="headline-h1">Antonyms of {word}</h2>
            </div>
            <div className="syno">
              {Array.isArray(antonyms)
                ? antonyms.map((item, index) => (
                    <div key={index} className="each-syno">
                      <p>{item}</p>
                    </div>
                  ))
                : typeof antonyms === "object" && antonyms !== null
                ? Object.entries(antonyms).map(([key, value], index) => (
                    <div key={index} className="each-syno">
                      <p>{value}</p>
                    </div>
                  ))
                : "No data available"}
            </div>
          </div>
        )}

        {/* -----------------------------------4----------------------------- */}
        {/* -----------------------------------SS part----------------------------- */}
        <div className="main-cont-for-ss">
          <h1 className="title-for-series-ss">TV series example of the word</h1>
          <div className="each-ss">
            {data.map(({ word, subtitleInfo }, index) => {
              const { end_time, text, mname, mtitle } = subtitleInfo;

              // Construct the image URL
              const baseUrl = `https://content2.mcqstudy.com/ss`;
              const formattedTime = end_time.replace(/,/g, "."); // Replace the comma with a dot
              const imageUrl = `${baseUrl}/${mname}-${formattedTime}.jpeg.webp`;
              const fallbackUrl = `${baseUrl}/${mname}-${formattedTime}.jpeg`;

              return (
                <div key={index} className="card">
                  <div className="imageWrapper">
                    <Image
                      src={imageUrl}
                      alt={text.trim()}
                      width={600}
                      height={400}
                      fallback={fallbackUrl}
                      layout="responsive"
                      className="image"
                    />
                  </div>
                  {/* <p className="word">{word}</p> */}
                  <p className="title">{mtitle}</p>
                  <p className="subtitle">{text.trim()}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* -----------------------------------SS part close----------------------------- */}

        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-learn-prepositions"
            title="Learn Prepositions by Photos"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/learn-prepositions-by-photos.webp"
              alt="Learn Prepositions by Photos"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-commonly-confused-words"
            title="commonly confused words"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/commonly-confused-words.webp"
              alt="commonly confused words"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-form-of-verbs"
            title="form of verbs"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/form-of-verbs.webp"
              alt="form of verbs"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-300-plus-toefl-words"
            title="Learn 300+ TOEFL words"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/tofel_words.webp"
              alt="Learn 300+ TOEFL words"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-fill-in-the-blanks-page-1"
            title="Fill in the blanks"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/fill_in_the_gaps.webp"
              alt="Fill in the blanks"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-topic-wise-words-animals"
            title="Topic Wise Words"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/topic_wise_words.webp"
              alt="Topic Wise Words"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-learn-3000-plus-common-words"
            title="Learn 3000+ common words"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/common_words.webp"
              alt="Learn 3000+ common words"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-grammar-post_id-25-cat-2"
            title="Learn English Grammar"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/english_grammar.webp"
              alt="Learn English Grammar"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-meaning-technical"
            title="Words Everyday"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/words_everyday.webp"
              alt="Words Everyday"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-meaning-technical"
            title="Most Searched Words"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/most_searched_words.webp"
              alt="Most Searched Words"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-learn-common-gre-words"
            title="GRE Words"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/gre_words.webp"
              alt="GRE Words"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.bdword.e2bdictionary"
            title="Android App"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/android_app.webp"
              alt="Android App"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://itunes.apple.com/us/app/english-bengali-dictionary/id1213381239?ls=1&mt=8"
            title="iPhone App"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/iphone_app.webp"
              alt="iPhone App"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://chrome.google.com/webstore/detail/bdword-english-to-bengali/cogjmeckpkinhnidokapabgaoelhkbcl"
            title="Chrome Extension"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/chrome_extension.webp"
              alt="Chrome Extension"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-learn-translations"
            title="Common Translations"
          >
            <Image
              src="https://content2.mcqstudy.com/bw-static-files/site_image/common_translations.webp"
              alt="Common Translations"
              width={300}
              height={200}
              layout="responsive"
            />
          </a>
        </div>
      </div>

      <div className="right-part">
        
          {/* <script
            async
            custom-element="amp-ad"
            src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
          ></script> */}
        
        <div className="right-part-up-down">
          <fieldset className="right-fieldset">
            <legend className="article-title">Article Section</legend>
            <div className="fieldset_body inner_details">
              <div>
                <Image
                  src="https://server3.mcqstudy.com/blog_image/Capt.webp" // Use absolute path from the public directory
                  alt="Native speaker 'mistakes' – past participles, 'me', splitting infinitives"
                  layout="responsive" // Makes the image responsive
                  width={303} // Original width of the image
                  height={227} // Original height of the image
                  style={{ maxHeight: "180px" }} // Applying maxHeight directly
                />
              </div>
              <a
                title="Native speaker 'mistakes' – past participles, 'me', splitting infinitives"
                href="https://www.bdword.com/english-to-bengali-blog?id=76"
                target="_blank"
                style={{ color: "blue" }}
              >
                Click to read..
              </a>
              <br />
              <b style={{ fontSize: "smaller" }}>Published: 12 Mar, 2023</b>
              <br />
              <label style={{ color: "#133330", cursor: "pointer" }}>
                More articles:
              </label>
              <br />
              <ul className="article-list">
                <li>
                  <a
                    title="Verb patterns – gerunds or infinitives"
                    href="https://www.bdword.com/english-to-bengali-blog?id=74"
                    target="_blank"
                  >
                    Verb Patterns – Gerunds Or Infinitives
                  </a>
                  <small>Published: 28 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Using the past to talk about the present or future"
                    href="https://www.bdword.com/english-to-bengali-blog?id=73"
                    target="_blank"
                  >
                    Using The Past To Talk About The Present Or Future
                  </a>
                  <small>Published: 27 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Conditionals review"
                    href="https://www.bdword.com/english-to-bengali-blog?id=72"
                    target="_blank"
                  >
                    Conditionals Review
                  </a>
                  <small>Published: 17 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Infinitives of purpose"
                    href="https://www.bdword.com/english-to-bengali-blog?id=71"
                    target="_blank"
                  >
                    Infinitives Of Purpose
                  </a>
                  <small>Published: 09 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Linking words of contrast"
                    href="https://www.bdword.com/english-to-bengali-blog?id=70"
                    target="_blank"
                  >
                    Linking Words Of Contrast
                  </a>
                  <small>Published: 08 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Stative verbs in the continuous form"
                    href="https://www.bdword.com/english-to-bengali-blog?id=69"
                    target="_blank"
                  >
                    Stative Verbs In The Continuous Form
                  </a>
                  <small>Published: 06 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Relative clauses"
                    href="https://www.bdword.com/english-to-bengali-blog?id=68"
                    target="_blank"
                  >
                    Relative Clauses
                  </a>
                  <small>Published: 02 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Comparatives and Superlatives Meaning and use"
                    href="https://www.bdword.com/english-to-bengali-blog?id=67"
                    target="_blank"
                  >
                    Comparatives And Superlatives Meaning And Use
                  </a>
                  <small>Published: 30 Jan, 2023</small>
                </li>
                <li>
                  <a
                    title="Vocabulary Vs Dictionary Vs Thesaurus"
                    href="https://www.bdword.com/english-to-bengali-blog?id=66"
                    target="_blank"
                  >
                    Vocabulary Vs Dictionary Vs Thesaurus
                  </a>
                  <small>Published: 27 Jan, 2023</small>
                </li>
              </ul>
            </div>
          </fieldset>
        </div>

        <div className="box_wrapper3">
          <div className="inner_wrapper3">
            <button className="btn_default3 bdr_radius2">
              <a
                href="http://www.allbanglanewspaperlist24.com/"
                target="_blank"
              >
                <Image
                  src="https://content2.mcqstudy.com/bw-static-files/img/newspaper-icon.png"
                  alt="icon"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <label>All Bangla Newspapers</label>
              </a>
            </button>
          </div>
        </div>
        <div className="box_wrapper2">
          <div className="inner_wrapper">
            <fieldset className="fieldset_custom">
              <legend className="custom_font2">Your Favorite Words</legend>

              <div className="fieldset_body">
                <div className="clear_fixdiv">
                  Currently, you do not have any favorite words. Please click on
                  the heart icon to add words to your favorite list.
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="box_wrapper2">
          <div className="inner_wrapper">
            <fieldset className="fieldset_custom">
              <legend className="custom_font2">Your Word History</legend>
              <div className="words-searched">
                <p>
                  You can found here all the words that you have searched on our
                  wibsite.
                </p>
                <SearchList></SearchList>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="ad-box">
          <AdSense></AdSense>
        </div>
      </div>
    </div>
  );
};

export default Meaning;

