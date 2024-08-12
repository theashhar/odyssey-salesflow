export default function Input({
  label,
  type,
  name,
  value,
  disabled,
  placeholder,
  onHandleChange,
  onHandleBlur,
}) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={name}
        className="w-fit inline-block whitespace-nowrap text-sm font-semibold text-gray-900 capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        disabled={disabled ? true : false}
        onChange={onHandleChange}
        onBlur={onHandleBlur}
        className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder ? placeholder : ""}
        required
      />
    </div>
  );
}

export function TextArea({
  label,
  type,
  name,
  value,
  disabled,
  placeholder,
  onHandleChange,
  onHandleBlur,
}) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={name}
        className="w-fit inline-block whitespace-nowrap text-sm font-semibold text-gray-900 capitalize"
      >
        {label}
      </label>
      <textarea
        type={type}
        id={name}
        value={value}
        disabled={disabled ? true : false}
        onChange={onHandleChange}
        onBlur={onHandleBlur}
        className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder ? placeholder : ""}
        required
      />
    </div>
  );
}

export function Select({
  label,
  name,
  options,
  selected,
  value,
  onHandleChange,
  onHandleBlur,
}) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={name}
        className="w-fit inline-block whitespace-nowrap text-sm text-gray-900 font-semibold capitalize"
      >
        {label}
      </label>
      <select
        id={name}
        className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm block min-w-[10rem] p-2.5"
        value={value}
        onChange={onHandleChange}
        onBlur={onHandleBlur}
        required
      >
        {selected ? (
          <option value={value} disabled selected>
            {value}
          </option>
        ) : (
          <option value="" disabled selected>
            {name}
          </option>
        )}
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
