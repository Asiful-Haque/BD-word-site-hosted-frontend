import Link from "next/link";
import Image from "next/image";
import SearchList from "./Search_list";
import "../styles/Meaning.css";

const SpellChecker = async ({ word, data }) => {
  const suggestionsString = data.suggestions[1];
  const suggestions =
  suggestionsString === "*"
    ? []
    : (suggestionsString.match(/1:\s*(.*)/)?.[1] || "")
        .split(",")
        .map((suggestion) => suggestion.trim());
  return (
    <div className="hero-container-error-page">
      <div className="left-part">
        <div className="box-suggestion">
          <h2>English to bengali Meaning :: {word}</h2>
          <h1 className="red">No word meaning found for &apos;{word}&apos;</h1>
          <h1>Did you mean &quot;{suggestions[0]}?&quot;</h1>

          <ul className="list-suggestion">
            {suggestions && suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <li key={index}>
                  <Link href={`/english-to-bengali-meaning-${suggestion}`}>
                    {suggestion}
                  </Link>
                </li>
              ))
            ) : (
              <p>No suggestions available.</p>
            )}
          </ul>
        </div>
      </div>

      <div className="right-part">
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

              <div className="fieldset_body inner_details" id="load_favourite">
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

              <div className="fieldset_body inner_details" id="load_favourite">
                <div className="words-searched">
                  You can found here all the words that you have searched on our
                  wibsite.
                  {
                    <div className="words-searched">
                      <SearchList></SearchList>
                    </div>
                  }
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpellChecker;
