export const constantFilter = {
    SET_TYPE: 'SET_TYPE'
}

export const filterActions = {
    setType: (index) => ({
        type: constantFilter.SET_TYPE,
        payload: index
    })
}