// constants for actions
export const constantData = {
    SHOW_LOADER: 'SHOW_LOADER',
    SET_DATA: 'SET_DATA'
}

// action creaters
export const dataActions = {

    showLoader: () => ({
        type: constantData.SHOW_LOADER
    }),

    setDataAction: data => ({
        type: constantData.SET_DATA,
        payload: data
    })
};