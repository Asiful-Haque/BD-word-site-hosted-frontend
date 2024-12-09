import Header_bangla from "@/components/Header_bangla";
import SpellChecker from "@/components/SpellChecker";

export default async function error(props) {
  const searchParams = await props.searchParams;
  const word = await searchParams.word;

  const response = await fetch(
    `${process.env.BASE_URL}/suggestions?word=${word}`
  );
  const data = await response.json();

  return (
    <div>
        <Header_bangla></Header_bangla>
        <SpellChecker word={word} data={data} ></SpellChecker>
    </div>
  );
}
