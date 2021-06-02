import React from "react";
import { connect } from "react-redux";
import "./SharesList.scss";
import { selectFilteredShares } from "../../../redux/selectors";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */

export const ListItem = ({ share, onClick }) => {
  return (
    <div
      className={"list-item"}
      data-testid={"shareListItem"}
      onClick={onClick}
    >
      <div className={"share-name-and-volume-container"}>
        <span className={"share-name"} data-testid={"shareName"}>
          {share?.stockSymbol}
        </span>
        <span className={"share-quantity"} data-testid="shareQuantity">
          {share?.sharesQuantity + " SHARES"}
        </span>
      </div>
      <div
        className={
          "share-price-container " +
          `share-price-status-${share?.priceStatus.toLowerCase()}`
        }
        data-testid="sharePriceContainer"
      >
        <span className={"share-price"} data-testid="sharePrice">
          {"$" + share?.price}
        </span>
      </div>
    </div>
  );
};

export const SharesList = ({ sharesList }) => {
  return (
    <div className={"list-container"} data-testid="shareListContainer">
      {sharesList.length > 0 ? (
        sharesList.map((share) => (
          <ListItem
            key={"share-list-item-" + share.stockSymbol}
            share={share}
            onClick={() => console.log("list item click")}
          />
        ))
      ) : (
        <div
          className={"empty-list-message-container"}
          data-testid="emptyShareListContainer"
        >
          <span
            className={"empty-list-message"}
            data-testid="emptyShareListSpan"
          >
            No shares
          </span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sharesList: selectFilteredShares(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SharesList);
