
import React from 'react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Table } from '@tanstack/react-table'


/* 
ARROW FUNCTION VERSION
const TableSearchInputs = <TData,>({
  table,
}: {
  table: Table<TData>
}) => {
  // logic
}

⚠️ The comma <TData,> is required to avoid JSX parsing issues in TSX.
 */
function TableSearchInputs<TData>({
  table,
}: {
  table: Table<TData>
}) {
  return (
      <div className="flex items-center gap-8 py-4">

                <Input
                    placeholder="Filter username..."
                    value={(table.getColumn("username")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("username")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

  )
}

export default TableSearchInputs