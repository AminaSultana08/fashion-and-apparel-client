

const Services = () => {
    return (
        <div className="mt-10 bg-[url(https://i.ibb.co/F3BYPX2/13.jpg)] p-10">
       
        <div className="grid grid-cols-1 font-Signika lg:grid-cols-3 gap-6 justify-center">
            <div className="flex items-center gap-2">
                <img className="w-14 h-14" src="https://i.ibb.co/Xp5gDff/box.png" alt=""/>
                <div>
                <h1 className="text-2xl font-semibold">Free Shipping</h1>
                <p>Free shipping for orders over $150.</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <img className="w-14 h-14" src="https://i.ibb.co/QrDycxg/customer-service.png" alt=""/>
                <div>
                <h1 className="text-2xl font-semibold">Online Support</h1>
                <p>Our amazing team stays in touch 24/7.</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <img className="w-14 h-14" src="https://i.ibb.co/4jygSWg/wallet.png" alt=""/>
                <div>
                <h1 className="text-2xl font-semibold">Flexible Payment</h1>
                <p>Pay with multiple payment methods.</p>
                </div>
            </div>
            
        </div>
            
        </div>
    );
};

export default Services;