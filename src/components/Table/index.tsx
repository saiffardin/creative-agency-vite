import { ReactNode } from "react";
import "./table.css";

export type TableColumns<T> = TColumn<T>[];

type TColumn<TRow> = {
  key: keyof TRow; // Ensures the key must match one of the keys in Row
  label: string;
};

interface TableProps<TRow> {
  rows: TRow[];
  columns: TColumn<TRow>[];
}

const Table = <T extends object>({ rows, columns }: TableProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>
                <span className="cell-header">{col.label}:</span>{" "}
                {row[col.key] as ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
