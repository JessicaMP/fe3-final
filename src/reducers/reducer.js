export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARS":
      return { ...state, list: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "TOGGLE_THEME": //Completar
      return { ...state, theme: !state.theme };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
    return { ...state, favs: filteredFavs };
    default:
      return state;
  }
};
