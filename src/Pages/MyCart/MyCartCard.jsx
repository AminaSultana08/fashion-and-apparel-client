import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const MyCartCard = ({ item, cart, setCart }) => {
  const { _id, name, brand_name, photo, price } = item;

  const handleDeleteCart = (_id) => {
    console.log('deleted', _id);
    console.log('Deleting cart with id:', _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fashion-and-apparel-server-three.vercel.app/carts/${_id}`, {
          method: "DELETE",
        
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            console.log('Deleting cart with id:', _id);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              // const remainingCarts = cart?.filter(cartItem => cartItem._id !== _id)
              // setCart(remainingCarts);
            }
          });
      }
    });
  }

  return (
    <div>
      <div className="card w-72  bg-base-100 shadow-xl px-3 ">
        <figure><img className="h-64 w-64  pt-2" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center justify-center">{name}</h2>
          <div className="flex justify-center gap-5">
            <p className="text-sm font-bold">Price:${price}</p>
            <p className="text-sm font-bold">{brand_name}</p>
          </div>
          <div className="card-actions  flex items-center pt-5 justify-center">
            <button onClick={() => handleDeleteCart(_id)} className="px-4 py-3 rounded-xl text-sm bg-teal-500 text-white flex items-center justify-center gap-2"><RiDeleteBin5Fill className="text-xl" />Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
