import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "./Button";

export default function ProductCard({
  image,
  title,
  price,
  discountedPrice,
  onButtonClick,
}) {
  return (
    <div className="relative border-l border-r border-zinc-500 bg-black hover:bg-neutral-700 transition-all duration-300 w-[300px] md:w-[260px] h-auto flex flex-col justify-between overflow-hidden">
      <div className="flex justify-center my-5">
        <img src={image} alt={title} className="w-[150px] h-[220px]" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-white text-lg font-bold font-outfit">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="text-white font-outfit line-through">{price}</span>
            <span className="text-red-500 font-outfit">{discountedPrice}</span>
          </div>
          <div>
            <Button className="text-white font-outfit bg-red-900 px-4 py-1 rounded-xl hover:bg-red-700 transition-colors">
              View more
            </Button>
          </div>
        </div>
        <Button
          onClick={onButtonClick}
          className="border-t border-zinc-500 mt-3 bg-black flex justify-center gap-2 text-white py-2 hover:bg-zinc-800 hover:rounded-md transition-all duration-200"
        >
          <ShoppingCartIcon color="error" size="small" />
          <span className="font-outfit">Add to cart</span>
        </Button>
      </div>
    </div>
  );
}
