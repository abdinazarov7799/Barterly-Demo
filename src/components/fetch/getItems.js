function getItems() {
    return(
        fetch(process.env.REACT_APP_ITEMS_API)
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getItems;