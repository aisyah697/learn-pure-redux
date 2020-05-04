const { createStore } = require('redux')

initialState = {
    name: 'Yasin',
    points: 5,
    age: 23,
    siblings: ['Miki'],
    address: {
        street: 'krakatau',
        number: 10,
    },
    campus: 'Unair',
    favorite_food: [],
    status: ''
}

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHOOSE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_POINT':
            return {
                ...state,
                points: state.points + action.add_points
            };
        case 'SUBS_AGE':
            return {
                ...state,
                age: state.age - action.subs_age
            };
        case 'ADD_SIBLING':
            return {
                ...state,
                siblings: state.siblings.concat(action.siblings)
            };
        case 'REMOVE_SIBLING':
            const remove_sibling = state.siblings.filter(value => (value !== action.siblings))
            return {
                ...state,
                siblings: remove_sibling
            };
        case 'CHANGE_ADDRESS':
            return {
                ...state,
                address: { street: action.street, number: action.number }
            };
        case 'CHOOSE_CAMPUS':
            return {
                ...state,
                campus: action.campus
            };
        case 'ADD_FAVORITE_FOOD':
            const add_fav_food = state.favorite_food.push(action.fav_food)
            return {
                ...state,
                favorite_food: add_fav_food
            };

        case 'CHOOSE_STATUS':
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}


// actions creator
const chooseName = (name) => ({ type: 'CHOOSE_NAME', name })
const addPoint = (add_points) => ({ type: 'ADD_POINT', add_points })
const subsAge = (subs_age) => ({ type: 'SUBS_AGE', subs_age })
const addSibling = (siblings) => ({ type: 'ADD_SIBLING', siblings })
const removeSibling = (siblings) => ({ type: 'REMOVE_SIBLING', siblings })
const changeAddress = (street, number) => ({ type: 'CHANGE_ADDRESS', street, number })
const chooseCampus = (campus) => ({ type: 'CHOOSE_CAMPUS', campus })
const addFavoriteFood = (fav_food) => ({ type: 'ADD_FAVORITE_FOOD', fav_food })
const chooseStatus = (status) => ({ type: 'CHOOSE_STATUS', status })


// create store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch
store.dispatch(chooseName('Aisyah'))
store.dispatch(addPoint(5))
store.dispatch(subsAge(2))
store.dispatch(addSibling(['Rafli', 'Lolli']))
store.dispatch(removeSibling('Miki'))
store.dispatch(changeAddress('Merbabu', 9))
store.dispatch(chooseCampus('UI'))
store.dispatch(addFavoriteFood('Sate'))
store.dispatch(chooseStatus('single'))