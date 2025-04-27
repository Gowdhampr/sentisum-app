"use client";

import classnames from "classnames";

/**
 * Since we don't specify exact type of the input data, we need to inherit the type of the data prop
 */
interface DataTableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    width?: string;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
  }[];
  wrapperClassName?: string;
  isRowHoverable?: boolean;
}

const DataTable = <T extends { id: number | string }>({
  data,
  columns,
  wrapperClassName,
  isRowHoverable = false,
}: DataTableProps<T>) => {
  return (
    <div className={wrapperClassName}>
      <table
        className={classnames(
          "w-full table-auto border-separate border-spacing-0"
        )}
      >
        <thead>
          <tr className="text-center text-gray-500">
            {columns.map((column) => (
              <th
                key={column.key.toString()}
                style={column.width ? { width: column.width } : undefined}
                className="px-4 py-2 border-gray-200 text-sm"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={classnames(
                "text-center",
                isRowHoverable &&
                  "hover:shadow-[2px_2px_18px_8px_rgba(163,177,198,0.2)]"
              )}
            >
              {columns.map((column) => (
                <td key={column.key.toString()} className="px-4 py-3 text-sm">
                  {column.render
                    ? column.render(item[column.key], item)
                    : String(item[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
