export const todoReducer = (state, action) => {
    let tmp = JSON.parse(JSON.stringify(state.todoList))
    switch (action.type) {
    case 'DELETE': {
        tmp = tmp.filter(item => item.id !== action.id)
        return {
            ...state,
            todoList: tmp
        }
    }
    case 'SUBMIT': {
        const { id, name } = action.item
        if (id) {
            const idx = tmp.findIndex(item => item.id === id)
            tmp[idx].name = name
        } else {
            tmp?.push({ id: new Date().getTime(), name })
        }
        return {
            ...state,
            todoList: tmp
        }
    }
    case 'EDIT': {
        return {
            ...state,
            editItem: action.editItem
        }
    }
    default:
        return {
            ...state
        }
    }
}
