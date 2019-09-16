export const objUpdater = (array, actionId, isFollowed) => {
    return array.map(el => {
        if (el.id === actionId) return {
            ...el,
            followed: isFollowed
        };
        return el
    })
};