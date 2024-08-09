import Button from "./User/Button";

export default function Pagination({
  type,
  totalItems,
  itemsToShow,
  currentPage,
  setCurrentPage,
  start,
  end,
  className,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsToShow); i++) {
    pages.push(i);
  }

  return (
    (type === "simple" && (
      <div className="flex gap-x-4 self-end">
        {pages.map((pageNo, index) => (
          <div
            key={index}
            className={`font-bold ${
              pageNo === currentPage && className
            } size-7 rounded-full cursor-pointer text-center`}
            onClick={() => setCurrentPage(pageNo)}
          >
            {pageNo}
          </div>
        ))}
      </div>
    )) ||
    (type === "button" && (
      <div
        className={`w-full flex ${
          currentPage > 1 ? "justify-between" : "justify-end"
        } items-center`}
      >
        {currentPage > 1 && (
          <Button
            title="previous"
            onHandleClick={() => setCurrentPage(currentPage - 1)}
          ></Button>
        )}
        <span className="mx-4">
          Showing {start + 1} to {end > totalItems ? totalItems : end} of{" "}
          {totalItems} items
        </span>
        <Button
          title={end < totalItems && "Next"}
          onHandleClick={() => setCurrentPage(currentPage + 1)}
        ></Button>
      </div>
    ))
  );
}
