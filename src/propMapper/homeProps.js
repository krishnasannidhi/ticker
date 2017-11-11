export function homeProperties(state){
  let homeReducer= state.homeReducer
  return {
    welcomeMessage:homeReducer.welcomeTxt
  }
}
