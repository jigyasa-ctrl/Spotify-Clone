export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
   // token: null,
   //Remove after debugging...
   // token: 'BQCpIHYVeOPqvYwIqgVHaFVAitS6c9Kctzk_5RqZRKEEirGKid7FNjXHMhdEziP6epigsN-kU4EZvPfJwASOn36Y0-JQAhqzUIjCKxSxFoRKQsZFXJJ5gkzKb_FHYNDnpYr_45BhZ5xeRkbZe7EawPktb0nA3IYF0y0l6szwBjA3yquL',

}
const reducer =(state, action) => {
console.log(action)

switch(action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user
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
      

        case 'SET_TOKEN' :
           return{
               ...state,
               token: action.token,
           };

        case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };
           
        case 'SET_PLAYLISTS' :
            return {
                ...state,
                playlists: action.playlists
            };

            //gets/ saves playlist information to the data layer
        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
        return state;
}
}
export default reducer;