import "./Dropdown.css";

const Dropdown = ({name, label, value, items, placeholder, required, onAlter}) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select 
        name={name}
        required={required}
        value={value}
        onChange={e => onAlter(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {items.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
