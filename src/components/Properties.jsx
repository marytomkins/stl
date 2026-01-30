import { properties } from "../assets/ToolboxDatabase";

const Properties = () => {
  const headers = Object.keys(properties[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-3 py-2 border-b text-left font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {properties.map((row, i) => (
            <tr
              key={i}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-3 py-2 border-b whitespace-nowrap"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Properties;
