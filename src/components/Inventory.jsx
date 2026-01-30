import { useState } from "react";
import data from "../assets/Form W-Shape";

const Inventory = () => {
    const [steelType, setSteelType] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const selectedTypeConfig =
    data.types.find(t => Object.keys(t)[0] === steelType)?.[steelType];

  const renderField = (key, field) => {
    // INPUT FIELD
    if (field.input) {
      return (
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={formData[key] || ""}
          onChange={e => handleChange(key, e.target.value)}
        />
      );
    }

    // STANDARD DROPDOWN
    if (field.types && !Array.isArray(field.types[0])) {
      return (
        <select
          className="border p-2 rounded w-full"
          value={formData[key] || ""}
          onChange={e => handleChange(key, e.target.value)}
        >
          <option value="">{field.question}</option>
          {field.types.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    // SIZES (DEPENDENT DROPDOWNS)
    if (key === "sizes") {
      const selectedSize = field.types.find(
        s => s.size1 === formData.size1
      );

      return (
        <>
          <select
            className="border p-2 rounded w-full mb-2"
            value={formData.size1 || ""}
            onChange={e => handleChange("size1", e.target.value)}
          >
            <option value="">{field.question}</option>
            {field.types.map(size => (
              <option key={size.size1} value={size.size1}>
                {size.size1}
              </option>
            ))}
          </select>

          {selectedSize && (
            <select
              className="border p-2 rounded w-full"
              value={formData.size2 || ""}
              onChange={e => handleChange("size2", e.target.value)}
            >
              <option value="">Select Weight</option>
              {selectedSize.size2.map(weight => (
                <option key={weight} value={weight}>
                  {weight}
                </option>
              ))}
            </select>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <form className="space-y-6 max-w-lg">
      {/* STEEL TYPE */}
      <div>
        <label className="block mb-1 font-semibold">
          {data.question}
        </label>
        <select
          className="border p-2 rounded w-full"
          value={steelType}
          onChange={e => {
            setSteelType(e.target.value);
            setFormData({});
          }}
        >
          <option value="">Select Steel Type</option>
          {data.types.map(type => {
            const key = Object.keys(type)[0];
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>

      {/* DYNAMIC QUESTIONS */}
      {selectedTypeConfig &&
        Object.entries(selectedTypeConfig).map(([key, field]) => (
          <div key={key}>
            <label className="block mb-1 font-medium">
              {field.question}
            </label>
            {renderField(key, field)}
          </div>
        ))}
    </form>
  );
};

export default Inventory;
