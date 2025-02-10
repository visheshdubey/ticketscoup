import { GenericTable, Column } from './generic-table';
import { Invoice } from '../types/types';

type GenericTableProps<T> = {
    columns: Column<T>[];
    data: T[];
};

export default function PageTableTemplate({ columns, data }: GenericTableProps<Invoice>) {
    return <GenericTable<Invoice> columns={columns} data={data} />;
}
