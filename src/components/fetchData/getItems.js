function getItems() {
    return(
        fetch('https://tes.mediasolutions.uz/api.php?action=items')
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getItems;