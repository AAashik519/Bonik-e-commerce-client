import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
 

  const handleAddProduct = async(e) => {
     e.preventDefault()
     const form= e.target
     const name= form.name.value
     const category= form.category.value
     const description= form.description.value
     const price =form.price.value
      const discount =form.discount.value
      const image = form.image.files[0]
      const formData = new FormData()
      formData.append('image',image)
    // console.log(name ,category ,description ,price ,discount ,image, formData);
    try {
      const toastID = toast.loading('LOading ...?')
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=786da6b80f8c40e8d3f16b8e2f15de81`,formData)

      console.log(data.data);

      const ProductInfo = {
        name ,
        category ,
        description ,
        price ,
        discount ,
        cover :data.data.display_url
      }
      console.log(ProductInfo);
      axios.post('http://localhost:5000/addProduct',ProductInfo)
      .then((res)=>{
        if(res.data.insertedId){
          toast.success('Product Added Successfully' ,{id:toastID})
        }
      })


    } catch (error) {
      toast.error(error.message ,{id:toastID})
    }
  };

  return (
    <div>
      <div>
        <div className="container mx-auto w-[600px] mt-8 ">
          <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
          <form className="my-10" onSubmit={handleAddProduct}>
            <div className="mb-4 ">
              <label className="block text-sm font-semibold text-gray-600">
                Product Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Product Category
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="category"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                name="description"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Price
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="price"
              
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                 Discount
              </label>
              <input
                type="text-"
                className="w-full p-2 border rounded-md"
                name="discount"
             
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                  Image
              </label>
              <input
                      name="image"
                      className=" my-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="image"
                      type="file"
                      accept="image/*"
                    />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
         
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
