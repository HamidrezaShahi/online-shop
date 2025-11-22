"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import { DialogPopup } from "../common/DialogPopup";
import AddPtype from "../forms/AddPtype";
import Table from "../common/Table";

function PTypeManagement() {
  const [AddPtypestate, setAddPtypestate] = useState(null);
  const [pTypeList, setPTypeList] = useState([{}]);
  const getPTypes = async () => {
    const getReq = await axios.get("/api/v1/base/propType");

    setPTypeList(getReq.data.result);
  };
  useEffect(() => {
    getPTypes();
  }, []);

  async function click(newData: any) {
    if (newData._id) {
      await axios.put("/api/v1/base/propType", newData);
      // setPTypeList(newData);
      getPTypes();
    } else {
      try {
        axios.post("/api/v1/base/propType", newData);
        getPTypes();
      } catch (error) {
        console.log(">>>>>>>>>>>", error);
      }
    }
    setAddPtypestate(false);
  }

  function toggleAddPtypeForm(state: boolean) {
    setAddPtypestate(state);
  }
  function DeleteFunction(index: number) {
    const deleteId = pTypeList[index]._id;
    console.log(" -=-=- id for delete ui ", deleteId);

    axios.delete(`/api/v1/base/propType?id=${deleteId}`);
    getPTypes();
  }
  function EditeFunction(index: number) {
    setAddPtypestate(pTypeList[index]);
  }
  return (
    <div>
      <LayoutSideSpace>
        <div className=" py-5 ">
          <h1 className="font-bold text-xl mb-10">Product category</h1>
          <DialogPopup
            title="sik"
            open={AddPtypestate}
            togglePopup={toggleAddPtypeForm}
          >
            <AddPtype onsubmit={click} editObject={AddPtypestate} />
          </DialogPopup>{" "}
          <Table
            list={pTypeList}
            columns={["name"]}
            DeleteFunction={DeleteFunction}
            EditFunction={EditeFunction}
          />
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default PTypeManagement;
