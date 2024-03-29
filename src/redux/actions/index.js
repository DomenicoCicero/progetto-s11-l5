export const GET_POP = "GET_POP";
export const GET_ROOK = "GET_ROOK";
export const GET_HIPHOP = "GET_HIPHOP";

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
