const { createStore } = require('redux')

initialState = {
    choosenMentees: 'Yasin',
    points: 0,
    mentee: []
}

// reducer
const reducer = (state = initialState, action) => {
    if (action.type === 'CHOOSE_AJAY') {
        return {
            ...state,
            choosenMentees: action.mentee
        }
    }
    if (action.type === 'CHOOSE_BAGAS') {
        return {
            ...state,
            choosenMentees: action.mentee
        }
    }
    // console.log(state)
}

// actions
const chooseAjay = { type: 'CHOOSE_AJAY', mentee: 'Ajay' }
const chooseBagas = { type: 'CHOOSE_BAGAS', mentee: 'Bagas' }

// create store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch
store.dispatch(chooseAjay)
store.dispatch(chooseBagas)