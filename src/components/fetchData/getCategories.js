function getCategories() {
    return(
        fetch('https://tes.mediasolutions.uz/api.php?action=categories')
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getCategories;