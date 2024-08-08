import { useEffect, useState } from "react";

export default function usePagination(itemsToShow) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItem, setCurrenItem] = useState({
    start: currentPage - 1,
    end: itemsToShow,
  });

  useEffect(() => {
    setCurrenItem({
      start: currentPage * itemsToShow - itemsToShow,
      end: currentPage * itemsToShow,
    });
  }, [currentPage]);

  return [currentItem, currentPage, setCurrentPage];
}
