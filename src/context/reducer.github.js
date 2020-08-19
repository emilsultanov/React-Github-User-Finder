function githubReducer( state, action ) {
   switch ( action.type ) {

      case 'set_user': {
         return { ...state, user: { ...action.payload.user } }
      }

      case 'set_followers': {
         return { ...state, followers: [ ...action.payload.followers ] }
      }

      case 'remove_user': {

      }

      default:
         return state;
   }
}

export default githubReducer;