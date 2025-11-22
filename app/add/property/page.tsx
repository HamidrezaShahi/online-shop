"use client";
import React, { useEffect, useState } from "react";
import LayoutSideSpace from "@/components/layout/LayoutSideSpace";
import TableDemo from "@/components/common/Table";
import { DialogPopup } from "@/components/common/DialogPopup";
import AddProperty from "@/components/forms/AddProperty";
import axios from "axios";
function page() {
  const [AddPropertyState, setAddPropertyState] = useState(null);
  const [property, setProperty] = useState([{}]);
  const getProperty = async () => {
    const getReq = await axios.get("/api/v1/base/property");
    setProperty(getReq.data.result);
  };
  useEffect(() => {
    getProperty();
  }, []);

  async function click(newData: any) {
    if (newData._id) {
      await axios.put("/api/v1/base/property", newData);
      getProperty();
    } else {
      try {
        await axios.post("/api/v1/base/property", newData);
        getProperty();
      } catch (error) {
        console.log("property error", error);
      }
    }
    setAddPropertyState(false);
  }
  function toggleAddPropertyForm(state: boolean) {
    setAddPropertyState(state);
  }
  function DeleteFunction(index: number) {
    const deleteId = property[index]._id;
    axios.delete(`/api/v1/base/property?id=${deleteId}`);
  }
  async function EditeFunction(index: number) {
    setAddPropertyState(property[index]);
    // const update=property[index]._id
  }
  console.log("property", property);

  return (
    <div className="pt-5">
      <LayoutSideSpace>
        <h1 className="font-bold text-xl mb-3">property</h1>
        <DialogPopup
          open={AddPropertyState}
          title="Add property"
          togglePopup={toggleAddPropertyForm}
        >
          <AddProperty onsubmit={click} editObject={AddPropertyState} />
        </DialogPopup>
        <TableDemo
          list={property}
          columns={["name", "propertyTypeId"]}
          DeleteFunction={DeleteFunction}
          EditFunction={EditeFunction}
        />
      </LayoutSideSpace>
    </div>
  );
}

export default page;
