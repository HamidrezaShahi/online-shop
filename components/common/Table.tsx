import React from "react";
import { Table } from "../ui/table";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DeleteIcon, Edit2Icon } from "lucide-react";

export const invoices = [
  {
    tablerow: "name",
    title: "pox",
  },
];
interface TableProps {
  list: any[];
  columns: string[];
  DeleteFunction?: (index: number) => void;
  EditFunction?: (index: number) => void;
}
function TableDemo({
  list,
  columns,
  DeleteFunction,
  EditFunction,
}: TableProps) {
  console.log({ list });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={"head-" + col}>{col}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((item, index) => (
          <TableRow key={index + "row"}>
            {columns.map((col, innerIndex) => {
              console.log(item[col], col);

              return (
                <TableCell key={"col-" + item[col] + index + innerIndex}>
                  <div>{item[col]}</div>
                </TableCell>
              );
            })}
            {(DeleteFunction || EditFunction) && (
              <TableCell>
                <div className="flex">
                  {DeleteFunction && (
                    <DeleteIcon onClick={() => DeleteFunction(index)} />
                  )}
                  {EditFunction && (
                    <Edit2Icon onClick={() => EditFunction(index)} />
                  )}
                </div>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemo;
