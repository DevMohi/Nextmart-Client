"use client";
import React from "react";
import CreateBrandModal from "./CreateBrandModal";
import { IBrand } from "@/types/brand";
import { Trash } from "lucide-react";
import { deleteBrand } from "@/services/Brand";
import { toast } from "sonner";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { NMTable } from "@/components/ui/core/NMTable";

type TBrandProps = {
  brands: IBrand[];
};

const ManageBrand = ({ brands }: TBrandProps) => {
  console.log(brands);
  const handleDelete = async (data: IBrand) => {
    console.log(data._id);
    try {
      const res = await deleteBrand(data._id);
      if (res.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const columns: ColumnDef<IBrand>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.logo}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>Status</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <div>
          <button
            className="text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* //will consist of a modal  */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold">Manage Brands</h1>
        <CreateBrandModal />
      </div>
      <NMTable data={brands} columns={columns} />
    </div>
  );
};

export default ManageBrand;
