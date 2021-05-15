export const AC_AddCount = (data) => {
    return {
        type: 'AddProduct',
        payload: {
            productId: data
        }
    }
}

export const AC_RemoveCount = (data) => {
    return {
        type: 'RemoveProduct',
        payload: {
            productId: data
        }
    }
}

export const AC_totCount = (data) => {
    return {
        type: 'TotalCount',
        payload: data
    }
}