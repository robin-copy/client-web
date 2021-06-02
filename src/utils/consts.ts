export const REQUEST_STATUS = {
    NONE: {loading: false, success: false, error: false},
    LOADING: {loading: true, success: false, error: false},
    SUCCESS: {loading: false, success: true, error: false},
    ERROR: {loading: false, success: false, error: true},
};

export const SHARE_PRICE_STATUS = {
    INCREASED: "INCREASED",
    EQUAL: "EQUAL",
    DECREASED: "DECREASED",
}
