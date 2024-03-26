export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

export const addToFavouritesAction = (selectedCompany) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: selectedCompany,
  };
};

export const removeFromFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i,
  };
};

export const getJobsAction = (query) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return (dispatch, getState) => {
    fetch(baseEndpoint + query + "&limit=20")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((jobs) => {
        console.log(getState, "STATO CONDIVISO");
        dispatch({
          type: GET_JOBS,
          payload: jobs,
        });
      })
      .catch((error) => console.log(error));
  };
};
