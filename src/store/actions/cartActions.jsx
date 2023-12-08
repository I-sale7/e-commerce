import { DECREMENT, INCREMENT } from "./types"

export const increamentAction = async (dispatch)=> {
  return dispatch({
    type: INCREMENT
  })
}

export const decreamentAction = async (dispatch)=> {
  return dispatch({
    type: DECREMENT
  })
}