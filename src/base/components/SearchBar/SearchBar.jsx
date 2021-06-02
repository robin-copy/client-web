import React from "react";
import { connect } from "react-redux";
import "./SearchBar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import actions from "../../../redux/actions";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
export const SearchBar = ({ onChange, searchInputText }) => {
  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= 20) onChange(text);
  };
  return (
    <div className={"search-bar"}>
      <div className={"search-container"}>
        <AiOutlineSearch className={"search-icon"} />
        <input
          className="search-bar-input"
          value={searchInputText}
          onChange={handleChange}
          placeholder="Search by stock or market name"
          data-testid="searchInput"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchInputText: state.base.searchInputText,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (text) => dispatch(actions.base.changeSearchInput(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
