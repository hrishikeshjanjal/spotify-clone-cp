import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playing: false,
  playlists: [],
  item: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  //remove after finished developing...
  // token:
  //   "BQCya6IQs_w88hsm3AfsGeNx2YQlBkErNjPhx2Zjain2k8xL5jI5oaTrDntcgeZRa5fO9onoc0FVptHqsol1UT7A5KXi3ZXnvBMZpp4m2DuQsa8WSebf4e-bVOwl_YJnA4uMdqhGKZC4gj-DWzJmFFLMxorDw8o2_ZddIUG5FKGnyHt-2uxF",
};

//action=>type,[payload]
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
