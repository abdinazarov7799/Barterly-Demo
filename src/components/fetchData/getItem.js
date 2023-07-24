
function getItem(id) {
    return(
        fetch(`https://tes.mediasolutions.uz/api.php?action=item&id=${id}`)
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getItem;