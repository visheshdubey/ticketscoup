import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Spinner from '@/components/spinner';

export interface Column<T> {
    key: keyof T | string;
    label: string;
    className?: string;
    render?: (row: T) => React.ReactNode;
}

export interface GenericTableProps<T> {
    columns: Column<T>[];
    data: T[];
}

export function GenericTable<T>({ columns, data }: GenericTableProps<T>) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-[#EAECFC] gap-[60px] border-none hover:bg-[#EAECFC] rounded-lg font-satoshi font-medium text-sm leading-[18px]">
                    {columns.map((column, index) => (
                        <TableHead key={index} className={column.className}>
                            {column.label}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {!data && (
                    <TableRow className="h-[400px] hover:bg-white">
                        <TableCell colSpan={columns.length} className="text-center">
                            <div className="flex items-center justify-center h-full">
                                <Spinner size="xs" />
                            </div>
                        </TableCell>
                    </TableRow>
                )}

                {data.length == 0 ? (
                    <TableRow className="h-[400px] hover:bg-white">
                        <TableCell colSpan={columns.length} className="text-center">
                            <div className="flex items-center justify-center h-full">
                                <span className="font-satoshi text-gray-900 text-sm">No Tickets to show.</span>
                            </div>
                        </TableCell>
                    </TableRow>
                ) : (
                    data.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className="">
                            {columns.map((column, colIndex) => (
                                <TableCell key={colIndex} className={column.className}>
                                    <div className="py-1">
                                        {column.render ? column.render(row) : (row as any)[column.key]}
                                    </div>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
}
