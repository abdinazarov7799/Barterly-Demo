function getCarBrands() {
    return(
        fetch(process.env.REACT_APP_CAR_BRANDS_API)
            .then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    )
}
export default getCarBrands;