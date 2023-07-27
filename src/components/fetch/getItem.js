
function getItem(id) {
    return(
        fetch(process.env.REACT_APP_ITEM_API + id)
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getItem;