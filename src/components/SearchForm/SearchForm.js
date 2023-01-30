import SearchIcon from "../Icons/SearchIcon";

function SearchForm() {
  return (
    <form className="search-form">
      <label className="search-form__label" aria-label="Search">
        <input className="search-form__field"
          type="search"
          name="keyword"
          placeholder="Search..."
          autoComplete="off"
        />
      </label>

      <button className="search-form__button" type="submit" aria-label="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchForm;
