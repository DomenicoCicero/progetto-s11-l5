export const GET_POP = "GET_POP";
export const GET_ROOK = "GET_ROOK";
export const GET_HIPHOP = "GET_HIPHOP";
export const SET_SEARCH = "SET_SEARCH";
export const GET_SEARCH = "GET_SEARCH";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";
export const ADD_LIKED_SONG = "ADD_LIKED_SONG";
export const REMOVE_LIKED_SONG = "REMOVE_LIKED_SONG";
export const ADD_TO_PLAYLIST_ROOK = "ADD_TO_PLAYLIST_ROOK";
export const ADD_TO_PLAYLIST_POP = "ADD_TO_PLAYLIST_POP";
export const ADD_TO_PLAYLIST_HIPHOP = "ADD_TO_PLAYLIST_HIPHOP";
export const REMOVE_FROM_PLAYLIST_ROOK = "REMOVE_FROM_PLAYLIST_ROOK";
export const REMOVE_FROM_PLAYLIST_POP = "REMOVE_FROM_PLAYLIST_POP";
export const REMOVE_FROM_PLAYLIST_HIPHOP = "REMOVE_FROM_PLAYLIST_HIPHOP";

export const getFetch = (query, typeOfRequest) => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: typeOfRequest,
          payload: data.data,
        });
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };
};

export const setSearch = data => {
  return {
    type: SET_SEARCH,
    payload: data,
  };
};

export const setSelectedSong = data => {
  return {
    type: SET_SELECTED_SONG,
    payload: data,
  };
};

export const addLikedSong = data => {
  return {
    type: ADD_LIKED_SONG,
    payload: data,
  };
};

export const removeLikedSong = id => {
  return {
    type: REMOVE_LIKED_SONG,
    payload: id,
  };
};

export const addToPlaylistRook = data => {
  return {
    type: ADD_TO_PLAYLIST_ROOK,
    payload: data,
  };
};

export const addToPlaylistPop = data => {
  return {
    type: ADD_TO_PLAYLIST_POP,
    payload: data,
  };
};

export const addToPlaylistHiphop = data => {
  return {
    type: ADD_TO_PLAYLIST_HIPHOP,
    payload: data,
  };
};

export const removeFromPlaylistRook = id => {
  return {
    type: REMOVE_FROM_PLAYLIST_ROOK,
    payload: id,
  };
};

export const removeFromPlaylistPop = id => {
  return {
    type: REMOVE_FROM_PLAYLIST_POP,
    payload: id,
  };
};

export const removeFromPlaylistHiphop = id => {
  return {
    type: REMOVE_FROM_PLAYLIST_HIPHOP,
    payload: id,
  };
};
