import React from "react";
import { connect } from "react-redux";
import "./MyStocksSection.scss";
import SearchBar from "../SearchBar/SearchBar";
import SharesList from "../SharesList/SharesList";
import baseActions from "../../base.actions";
import { compose } from "redux";
import { requestWrapper } from "../../../utils/hocs/requestWrapper";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
export const MyStocksSection = () => {
  return (
    <div className={"stock-section"}>
      <SearchBar />
      <SharesList />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getSharesList: () => dispatch(baseActions.getSharesList()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  requestWrapper((props) => props.getSharesList)
)(MyStocksSection);
