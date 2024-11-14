export default async function error(props) {
  const searchParams = await props.searchParams;
  const word = await searchParams.word;

  const response = await fetch(
    `http://localhost:5000/suggestions?word=${word}`
  );
  const data = await response.json();
  console.log(data);
  console.log(word);

  return (
    <div>
      <h1>Spell Checker</h1>
    </div>
  );
}
