import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/core/ProductCard";
import { getFlashSaleProducts } from "@/services/FlashSale";

import { IProduct } from "@/types";
import Link from "next/link";
import React from "react";
import CountDown from "./CountDown";

const FlashSale = async () => {
  const { data: products } = await getFlashSaleProducts();
  return (
    <NMContainer>
      <div className="bg-white bg-opacity-50 py-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h2 className="font-bold text-2xl">Flash Sale</h2>
              <CountDown />
            </div>
            <Link href="/products">
              <Button variant="outline" className="rounded-full">
                All Collection
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-8 my-5">
            {/* {products.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))} */}
            {products?.slice(0, 5).map((product: IProduct, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default FlashSale;
