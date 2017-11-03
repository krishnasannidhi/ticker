const initialState={
  welcomeTxt:'Default text'
}

export default (state=initialState,action)=>{
  switch (action.type) {
    case "Home": return {...state,welcomeTxt:action.welcomeTxt}
    default:
      return state;
  }

}
