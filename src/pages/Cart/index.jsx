import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../stores/menu/productsSlice"


const Cart = () => {
    const cart = useSelector(selectAllProducts);
    const tabs= ['Summary', 'Delivery', 'Payment'];

    if (!cart || cart.products.length === 0) {
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>Your Cart is empty</h1>
            </div>
        )
    }

    return (
        <>Cart</>
    )
    
}

export default Cart;