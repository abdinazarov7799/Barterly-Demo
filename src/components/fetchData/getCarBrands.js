function getCarBrands() {
    return(
        fetch('https://tes.mediasolutions.uz/api.php?action=car_brands')
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getCarBrands;