function Details() {
  return (
    <div id="details">
      <div>
        <img key={item.Title} src={item.Poster || null} alt={item.Title} />
      </div>
      <h2 className="item-title">{item.Title}</h2>
    </div>
  );
}

export default Details;
