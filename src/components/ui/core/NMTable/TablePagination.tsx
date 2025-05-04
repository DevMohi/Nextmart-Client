import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";

const TablePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  //   console.log(currentPage);
  const totalPage = 10;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  //   const handle;
  return (
    <div className="flex items-center gap-2 my-5">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant="outline"
        size="sm"
        className="w- h-8 rounded-full items-center justify-center cursor-pointer"
      >
        <ArrowLeft />
      </Button>

      {[...Array(totalPage)].map((_, index) => (
        <Button
          onClick={() => setCurrentPage(index + 1)}
          key={index}
          variant={currentPage === index + 1 ? "default" : "outline"}
          size="sm"
          className="w- h-8 rounded-full items-center justify-center "
        >
          {index + 1}
        </Button>
      ))}

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        variant="outline"
        size="sm"
        className="w- h-8 rounded-full items-center justify-center cursor-pointer"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;
