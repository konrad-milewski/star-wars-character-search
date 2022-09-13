import { Key, useState } from "react";
import { useNavigate } from "react-router-dom";
import get from "../api/get";

const Search = (props: { setChosenItem: any }) => {
  const { setChosenItem } = props;

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<any>([]);

  const searchCharacter = async () => {
    let results: Array<Object> = [];
    let res: any;

    res = await get(`people?search=${inputValue}`);
    res?.results && results.push(...res.results);

    setResult(results);
  };
  
  const navigate = useNavigate();
  return (
    <>
      <input onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={searchCharacter}>Search</button>
      {result.map((x: any, idx: Key) => {
        return (
          <p
            onClick={() => {
              setChosenItem(x);
              navigate(`/details`);
            }}
            key={idx}
          >
            {x.name}
          </p>
        );
      })}
    </>
  );
};

export default Search;
