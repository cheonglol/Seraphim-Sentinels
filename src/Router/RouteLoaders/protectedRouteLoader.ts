export const protectedRouteLoader = (childLoader: Function) => {
    if (typeof childLoader !== 'function') {
        throw new Error('childrenLoader must be a function');
    }


    // Finally, execute child
    return childLoader()
}