
import Swal from "sweetalert2";
import Navbar from "../Home/Navbar";
import Rating from "../../Component/Rating/Rating";
import Footer from "../../Component/Footer/Footer";


const AddProduct = () => { 
  const handleAddProduct= e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    const brand_name = form.brand_name.value
    const type = form.type.value
    const price = form.price.value
    const description = form.description.value
    const rating = form.rating.value
    
     const newProduct={name,photo,brand_name,type ,price,description,rating}
  console.log(newProduct);

  //send data to server
  fetch('https://fashion-and-apparel-server-ps09l1sek-amina-sultana-s-projects.vercel.app/product',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newProduct)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      Swal.fire({
        title: 'Success',
        text: 'Product has been added successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })
  form.reset()
  }


    return (
       <div>
       <Navbar></Navbar>
       <div className="bg-[url(https://i.ibb.co/nsfFf1F/13.jpg)] bg-cover bg-no-repeat h-auto text-teal-800 font-Signika ">
       <h1 className="front-semibold text-4xl  text-center">Add a Product</h1>
       
        <form onSubmit={handleAddProduct}>
            <div className="max-w-4xl mx-auto text-teal-800 font-Signika ">
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-teal-800 font-Signika ">Product Name</span>
            </label>
            <input type="name" placeholder="name" name="name"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-teal-800 font-Signika ">Photo Url</span>
            </label>
            <input type="photo" placeholder="photo" name="photo"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-teal-800 font-Signika ">Brand Type</span>
            </label>
           {/** <input type="text" placeholder="name" name="name"  className="input input-bordered " required /> */}
           <select name="brand_name"  className="py-3 rounded-lg  text-teal-800 font-Signika border border-gray-300">
            <option value='brand'  >--Select Brand--</option>
            <option value='Nike'  >Nike</option>
            <option value='Adidas' >Adidas</option>
            <option value='ZARA' >ZARA</option>
            <option value="Levi's" >Levi's</option>
            <option value='Gucci' >Gucci</option>
            <option  value='H&M'>H&M</option>
           </select>
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-teal-800 font-Signika ">Price</span>
            </label>
            <input type="number" placeholder="price" name="price"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-teal-800 font-Signika ">Type of Product</span>
            </label>
            <input type="text" placeholder="type" name="type"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-teal-800 font-Signika ">Short Description</span>
            </label>
            <input type="text" placeholder="Description" name="description"  className="input text-teal-800 font-Signika input-bordered " required />
          </div>
            <div className="form-control">
           <Rating></Rating>
          </div>
         
          <input type="submit" value="Add Product" className="btn btn-block hover:bg-teal-600 mt-6 mb-10 text-white bg-teal-500"/>
            </div>
        </form>
       
   </div>
   
<Footer></Footer>
       </div>
       
    );
};

export default AddProduct;