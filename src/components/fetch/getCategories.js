function getCategories() {
    return(
        fetch(process.env.REACT_APP_CATEGORIES_API)
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getCategories;