"use client";
import axios from "axios";
import React, { useState } from "react";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import { DialogPopup } from "../common/DialogPopup";
import AddProduct from "../forms/AddProduct";
import TableDemo from "../common/Table";

function AddProductManagement() {
  const [addProductState, setAddProductState] = useState(null);
  const [list, setList] = useState([{}]);
  const getProduct = async () => {
    const getReq = await axios.get("/api/v1/base/product");

    setList(getReq.data.result);
  };
  function onAddProduct(newData: any) {
    if (newData._id) {
      axios.put("/api/v1/base/product", newData);
      getProduct();
    } else {
      try {
        axios.post("/api/v1/base/product", newData);
        getProduct();
      } catch (error) {
        console.log("productError", error);
      }
    }
    setAddProductState(false);
  }
  const toggleAddProductForm = (state: boolean) => {
    setAddProductState(state);
  };
  function DeleteFunction(index: number) {
    const deleteId = list[index]._id;

    axios.delete("/api/v1/base/product", deleteId);
  }
  function EditFunction(index: number) {
    setAddProductState(list[index]);
  }

  return (
    <div>
      <LayoutSideSpace>
        <div className="flex">
          <div className="flex flex-col flex-1 gap-10">
            <div>
              <h1 className="font-bold text-xl">product</h1>
            </div>
            {/* <button className="w-20 h-10 mt-20 bg-red-400 rounded-sm">
                add
                
              </button> */}
            <DialogPopup
              title="Add Form"
              togglePopup={toggleAddProductForm}
              open={addProductState}
            >
              <AddProduct
                onSubmit={onAddProduct}
                editObject={addProductState}
              />
            </DialogPopup>
            <TableDemo
              DeleteFunction={DeleteFunction}
              EditFunction={EditFunction}
              list={list}
              columns={["name", "price", "categories", "Specifications"]}
            />
            {/* <div className="px-8">
                <Inputs label="title" />
                <Inputs label="price" />
              </div> */}
          </div>
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default AddProductManagement;
