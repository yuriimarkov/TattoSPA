import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <span className="icon-search"></span>
      <input type="text" placeholder="Пошук..." className="search_input" />
    </div>
  );
}
