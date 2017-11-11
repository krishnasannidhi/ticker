const initialState={
  welcomeTxt:'Default Welcome Message'
}

export default (state=initialState,action)=>{
  switch (action.type) {
    case "Home": return {...state,welcomeTxt:action.welcomeTxt}
    default:
      return state;
  }

}
