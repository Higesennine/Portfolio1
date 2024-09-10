import { FaShoppingCart } from "react-icons/fa";

export default function Header() {

    const handleCart = () => {
        const main = document.querySelector(".main");
        const body = document.querySelector("body");
        main?.classList.toggle("cartOpen");

        if (main!.classList.contains("cartOpen")) {
            body!.style.overflow = "hidden";
        } else {
            body!.style.overflow = "auto";
        }
    }

    return (
        <header className="header">
            <h2 className='headerTitle'>Menta Mart</h2>
            <button className='cartButton' onClick={handleCart}>
                <FaShoppingCart className='header__cartIcon' />
            </button>
        </header>
    )
}
