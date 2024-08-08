export default function Button({ type, title, onHandleClick, children }) {
  return (
    <button
      className={`${
        !title && "hidden"
      } flex gap-x-2 items-center px-4 py-2 bg-primary text-white capitalize`}
      onClick={onHandleClick}
      type={type}
    >
      {children}
      {title}
    </button>
  );
}
