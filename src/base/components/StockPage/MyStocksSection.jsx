import React from "react";
import { connect } from "react-redux";
import "./MyStocksSection.scss";
import SearchBar from "../SearchBar/SearchBar";
import SharesList from "../SharesList/SharesList";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const MyStocksSection = ({}) => {
  return (
    <div className={"stock-section"}>
      <SearchBar />
      <SharesList />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyStocksSection);
