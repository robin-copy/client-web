import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './SharesList.scss';
import baseActions from "../../base.actions";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */

export const ListItem = ({share, onClick}) => {
    return (
        <div className={"list-item"} data-testid={"shareListItem"} onClick={onClick}>
            <div className={"share-name-and-volume-container"}>
                <span className={"share-name"} data-testid={"shareName"}>{share?.stockSymbol}</span>
                <span className={"share-volume"} data-testid="shareVolume">{share?.volume + " SHARES"}</span>
            </div>
            <div className={"share-price-container"}>
                <span className={"share-price"} data-testid="sharePrice">{"$" + share?.price}</span>
            </div>
        </div>
    )
}

export const SharesList = (props) => {
    const {sharesList, getSharesList} = props;

    useEffect(() => {
        //!sharesList && getSharesList();
    }, [sharesList])

    return (
        <div className={"list-container"} data-testid="shareListContainer">
            {sharesList.length > 0 ? (sharesList.map(share => <ListItem key={"share-list-item-" + share.stockSymbol}
                                                                       share={share}
                                                                       onClick={() => console.log("list item click")}/>)) :
                <span className={"empty-list-message"} data-testid="emptyShareListSpan">You have not purchased any shares yet</span>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    sharesList: state.base.sharesList
});

const mapDispatchToProps = (dispatch) => ({
    getSharesList: () => dispatch(baseActions.getSharesList())
});

SharesList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(SharesList);

