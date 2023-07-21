function getCarModel(brand_id) {
    return(
        fetch(`https://tes.mediasolutions.uz/api.php?action=car_models&brand_id=${brand_id}`)
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getCarModel;