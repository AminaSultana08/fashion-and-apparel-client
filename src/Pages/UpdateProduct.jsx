import { useLoaderData } from "react-router-dom";
import Rating from "../Component/Rating/Rating";
import Swal from "sweetalert2";


const UpdateProduct = () => {
   const product = useLoaderData()
    console.log(product);
    const {_id,name,photo,brand_name,type ,price,description,rating} = product
     
    const handleUpdateProduct= e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const brand_name = form.brand_name.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        
         const updatedProduct={name,photo,brand_name,type ,price,description,rating}
      console.log(updatedProduct);

      fetch(` https://fashion-and-apparel-server-three.vercel.app/product/${_id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updatedProduct)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount){
          Swal.fire({
            title: 'Success',
            text: 'Product updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
    form.reset()
    }




    return (
        <div>
            
            <div className="bg-[url(https://i.ibb.co/nsfFf1F/13.jpg)] bg-cover pt-10 bg-no-repeat h-auto text-teal-800 font-Signika ">
            <h1 className="front-semibold text-4xl  text-center">Update Product</h1>
            
             <form onSubmit={handleUpdateProduct}>
                 <div className="max-w-4xl mx-auto text-teal-800 font-Signika ">
                 <div className="form-control">
                 <label className="label">
                   <span className="label-text font-bold  text-teal-800 font-Signika ">Product Name</span>
                 </label>
                 <input type="name" placeholder="name" defaultValue={name} name="name"  className="input input-bordered " required />
               </div>
                 <div className="form-control">
                 <label className="label">
                   <span className="label-text font-bold text-teal-800 font-Signika ">Photo Url</span>
                 </label>
                 <input type="photo" placeholder="photo" defaultValue={photo} name="photo"  className="input input-bordered " required />
               </div>
                 <div className="form-control">
                 <label className="label">
                   <span className="label-text font-bold text-teal-800 font-Signika ">Brand Type</span>
                 </label>
               
                <select name="brand_name" defaultValue={brand_name}  className="py-3 rounded-lg  text-teal-800 font-Signika border border-gray-300">
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
                 <input type="number" placeholder="price" defaultValue={price} name="price"  className="input input-bordered " required />
               </div>
                 <div className="form-control">
                 <label className="label">
                   <span className="label-text font-bold text-teal-800 font-Signika ">Type of Product</span>
                 </label>
                 <input type="text" placeholder="type" defaultValue={type} name="type"  className="input input-bordered " required />
               </div>
                 <div className="form-control">
                 <label className="label">
                   <span className="label-text font-bold text-teal-800 font-Signika ">Short Description</span>
                 </label>
                 <input type="text" placeholder="Description" defaultValue={description} name="description"  className="input text-teal-800 font-Signika input-bordered " required />
               </div>
                 <div className="form-control">
                <Rating></Rating>
               </div>
              
               <input type="submit" value="Update Product" className="btn btn-block mt-6 mb-10 text-white bg-teal-500"/>
                 </div>
             </form>
            
        </div>
        </div>
    );
};

export default UpdateProduct;