function getCarModel(brand_id) {
    return(
        fetch(process.env.REACT_APP_CAR_MODELS_API + brand_id)
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getCarModel;