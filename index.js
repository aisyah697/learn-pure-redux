const { createStore } = require('redux')

initialState = {
    choosenMentees: 'Yasin',
    points: 0,
    mentee: []
}

// reducer
const reducer = (state = initialState, action) => {
    if (action.type === 'CHOOSE_MENTEE') {
        return {
            ...state,
            choosenMentees: action.payload
        }
    }
    if (action.type === 'ADD_POINT') {
        return {
            ...state,
            points: action.points
        }
    }
    // console.log(state)
}

// actions creator
const chooseMentee = (payload) => ({ type: 'CHOOSE_MENTEE', payload })
const addPoint = (points) => ({ type: 'ADD_POINT', points })


// create store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch
store.dispatch(chooseMentee('Derby'))
store.dispatch(chooseMentee('Agus'))
store.dispatch(chooseMentee('Andre'))
store.dispatch(chooseMentee('Rizal'))
store.dispatch(addPoint(2))
store.dispatch(addPoint(3))
store.dispatch(addPoint(-7))