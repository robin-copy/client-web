import React, { useEffect } from "react";
import "./SharesList.scss";

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

export const SharesList = ({ sharesList, getSharesList }) => {
  useEffect(() => {
    // getSharesList();
  }, []);

  return (
    <div className={"list-container"} data-testid="shareListContainer">
      {sharesList?.length > 0 ? (
        sharesList?.map((share) => (
          <ListItem
            key={"share-list-item-" + share.stockSymbol}
            share={share}
            // onClick={() => history.push(`/stock/${share?.stockSymbol}`)}
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
