import Button from "./elements/Button"

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-justify-between">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Don't let your tummy talk back to you
                </h2>
                <p className="font-semibold text-lg text-red-600 pyy-2">
                    Order Today!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 justify-end">
                <img src={require("../assets/images/food_banner.png")} alt="banner" className="max-h-95" />
            </div>
        </div>
    )
}