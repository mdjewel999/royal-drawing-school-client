import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import NavBar from "../Pages/Sheard/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;