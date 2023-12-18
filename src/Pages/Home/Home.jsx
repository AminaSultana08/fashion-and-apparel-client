
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
        
        
        <Banner></Banner>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pt-28 lg:gap-4 md:gap-3">
                    {
                        brands.map(brand=><BrandsCards key={brand.id} brand={brand} ></BrandsCards>)
                    }
                </div>
            </div>
            <Services></Services>
            <TopBrands></TopBrands>
            
        </div>
    );
};

export default Home;