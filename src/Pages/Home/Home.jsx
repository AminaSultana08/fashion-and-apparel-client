
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import BrandsCards from "./Brands/BrandsCards";
import Services from "./Services";
import Footer from "../../Component/Footer/Footer";
import TopBrands from "./TopBrands";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div>
        
        <Navbar></Navbar>
        <Banner></Banner>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-40 gap-7">
                    {
                        brands.map(brand=><BrandsCards key={brand.id} brand={brand} ></BrandsCards>)
                    }
                </div>
            </div>
            <Services></Services>
            <TopBrands></TopBrands>
            <Footer></Footer>
        </div>
    );
};

export default Home;