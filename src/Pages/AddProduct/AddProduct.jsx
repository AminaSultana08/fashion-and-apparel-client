
import Swal from "sweetalert2";
import Navbar from "../Home/Navbar";


const AddProduct = () => { 
  const handleAddProduct= e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    const brand_name = form.brand_name.value
    const product = form.product.value
    const description = form.description.value
    const rating = form.rating.value
    
     const newProduct={name,photo,brand_name,product,description,rating}
  console.log(newProduct);

  //send data to server
  fetch('http://localhost:5000/product',{
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
  }


    return (
       <div>
       <Navbar></Navbar>
       <div className="bg-[url(https://i.ibb.co/nsfFf1F/13.jpg)] bg-cover bg-no-repeat h-screen ">
       <h1 className="front-semibold text-4xl  text-center">Add a Product</h1>
       
        <form onSubmit={handleAddProduct}>
            <div className="max-w-4xl mx-auto">
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat ">Product Name</span>
            </label>
            <input type="name" placeholder="name" name="name"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat ">Photo Url</span>
            </label>
            <input type="photo" placeholder="photo" name="photo"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat ">Brand Type</span>
            </label>
           {/** <input type="text" placeholder="name" name="name"  className="input input-bordered " required /> */}
           <select name="brand_name"  className="py-3 rounded-lg  border border-gray-300">
            <option value='brand'  >--Select Brand--</option>
            <option value='Nike'  >Nike</option>
            <option value='Adidas' >Adidas</option>
            <option value='ZARA' >ZARA</option>
            <option value='Levis' >Levi's</option>
            <option value='Gucchi' >Gucci</option>
            <option  value='h&m'>H&M</option>
           </select>
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat ">Price</span>
            </label>
            <input type="number" placeholder="price" name="price"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat ">Type of Product</span>
            </label>
            <input type="text" placeholder="product" name="product"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat ">Short Description</span>
            </label>
            <input type="text" placeholder="Description" name="description"  className="input input-bordered " required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold font-Montserrat ">Ratings</span>
            </label>
            <input type="number" placeholder="rating" name="rating"  className="input input-bordered " required />
          </div>
         
          <input type="submit" value="Add Product" className="btn btn-block mt-6 bg-green-100"/>
            </div>
        </form>
       
   </div>
       </div>
    );
};

export default AddProduct;