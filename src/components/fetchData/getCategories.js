function getCategories() {
    return(
        fetch('https://tes.mediasolutions.uz/api.php?action=categories')
            .then(response => response.json())
    )
}
export default getCategories;