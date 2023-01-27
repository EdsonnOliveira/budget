import createReducer from "../store/createReducer";

export const types = {
    VALUE_RESET: 'VALUE_RESET',
    VALUE_SOLD_TODAY: 'VALUE_SOLD_TODAY'
}

interface InitialState {
    valueSoldToday: string
};

const initialState = {
    valueSoldToday: ''
}

export type State = InitialState

export const valueReducer = createReducer(initialState, {
    [types.VALUE_RESET](state: State) {
        return {
            ...state,
            ...initialState
        }
    },
    [types.VALUE_SOLD_TODAY](state: State, action: State) {
        return {
            ...state,
            valueSoldToday: action.valueSoldToday
        }
    }
})

export const Creators = {
    setValueSoldToday: (valueSoldToday: string) => ({
        type: types.VALUE_SOLD_TODAY,
        valueSoldToday
    })
}

export default valueReducer