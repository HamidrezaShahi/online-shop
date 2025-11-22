"use client";
import React, { useEffect, useState } from "react";
import TableDemo from "../common/Table";
import Addprtype from "../forms/Addprtype";
import { DialogPopup } from "../common/DialogPopup";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import axios from "axios";

function PrTypeManagement() {
  const [propertyDialogState, setPropertyDialogState] = useState(null);
  const [properties, setProperties] = useState([{}]);
  const getPrtype = async () => {
    const getRequest = await axios.get("/api/v1/base/productType");
    setProperties(getRequest.data.result);
  };
  useEffect(() => {
    getPrtype();
  }, []);

  async function onSubmit(newValue: any) {
    if (newValue._id) {
      await axios.put("/api/v1/base/productType", newValue);
      getPrtype();
    } else {
      try {
        await axios.post("/api/v1/base/productType", newValue);
        setPropertyDialogState(null);
        getPrtype();
      } catch (error) {
        console.log(" add error ", error);
      }
    }
    setPropertyDialogState(null);
    console.log(newValue, ">>>>>>>>>>>>>>>>>>>>>");
  }
  function toggle(state: boolean) {
    setPropertyDialogState(state);
  }
  console.log(properties);

  function deleteFunction(index: number) {
    const deleteId = properties[index]._id;

    axios.delete(`/api/v1/base/productType?id=${deleteId}`);
  }
  // function updateProductType() {
  //   const edit = { id: properties[index]._id };

  //   axios.put("/api/v1/base/productType", edit);
  //   getPrtype();
  // }
  function EditeFunction(index: number) {
    setPropertyDialogState(properties[index]);
  }
  return (
    <div className="pt-5">
      <LayoutSideSpace>
        <div className="">
          <h1 className="font-bold text-xl">
            Classification of specifications
          </h1>
          <DialogPopup
            togglePopup={toggle}
            open={propertyDialogState ? true : false}
            title="prtype"
          >
            <Addprtype editObject={propertyDialogState} onsubmit={onSubmit} />
          </DialogPopup>
          <TableDemo
            list={properties}
            columns={["name"]}
            DeleteFunction={deleteFunction}
            EditFunction={EditeFunction}
          />
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default PrTypeManagement;
