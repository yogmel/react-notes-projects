import { createStore } from 'redux'

// Action generators - functions that return action objects

const incrementCount = ( {incrementBy = 1} = {} ) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET',
})

const setCount = ({count}) => ({
  type: 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions. Pure functions output only its input, that is, its return doesn't depend on a variable outside the function's scope.
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
        return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => { // subscribe runs the function every time the state is changed
  console.log(store.getState())
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(decrementCount({decrementBy: 2}))

// unsubscribe() // stops the update of subscribe

store.dispatch(setCount({count: 13}))
store.dispatch(resetCount())