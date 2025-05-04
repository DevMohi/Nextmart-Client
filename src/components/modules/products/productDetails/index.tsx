import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-5 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* IMAGE SECTION */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <Image
            src={product?.imageUrls[0]}
            alt="product image"
            width={500}
            height={500}
            className="rounded-md w-full object-cover h-80"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {product?.imageUrls.slice(0, 3).map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md border border-gray-200 overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`thumbnail ${idx}`}
                  width={500}
                  height={500}
                  className="w-full object-cover h-40"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="font-bold text-2xl mb-4">{product?.name}</h2>
          <p className="text-gray-600 mb-4 text-sm">{product?.description}</p>

          <div className="flex flex-wrap gap-2 mb-6 text-xs text-gray-700">
            <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
              <Star className="w-4 h-4" fill="orange" stroke="orange" />
              {product?.averageRating} Ratings
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Stock: {product?.stock}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Brand: {product?.brand?.name}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Category: {product?.category?.name}
            </span>
          </div>

          <hr className="border-gray-200 mb-4" />
          <p className="font-bold mb-4">
            Price:{" "}
            {product?.offerPrice ? (
              <>
                <span className="text-orange-500 mr-2">
                  $ {product.offerPrice}
                </span>
                <del className="text-gray-400">$ {product.price}</del>
              </>
            ) : (
              <span>$ {product.price}</span>
            )}
          </p>
          <hr className="border-gray-200 mb-6" />

          <Button variant="outline" className="w-full mb-3">
            Add To Cart
          </Button>
          <Button className="w-full">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
