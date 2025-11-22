"use client";
import React, { useState } from "react";
import LayoutSideSpace from "@/components/layout/LayoutSideSpace";
import TableDemo from "@/components/common/Table";
import { DialogPopup } from "@/components/common/DialogPopup";
import AddProduct from "@/components/forms/AddProduct";
import axios from "axios";
import AddProductManagement from "@/components/base/AddProductManagement";
function page() {
  return <AddProductManagement />;
}

export default page;
