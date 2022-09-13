import { Key } from "react";

const Details = (props: { filmsResults: Array<any>; chosenItem: any }) => {
  const { filmsResults, chosenItem } = props;

  return (
    <>
      {chosenItem?.name && <h1>{chosenItem.name}</h1>}
      {filmsResults &&
        filmsResults.map((film: any, idx: Key) => {
          return (
            <div key={idx} className="film-item">
              <h2>Title</h2>
              <p>{film.title}</p>
              <h2>Release date</h2>
              <p>{film.release_date}</p>
              <h2>Opening Crawl</h2>
              <p>{film.opening_crawl.substring(0, 130)}</p>
            </div>
          );
        })}
    </>
  );
};

export default Details;
