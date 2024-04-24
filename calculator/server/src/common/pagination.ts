import type { PaginatedData, PaginationOptions } from 'calc-types';

function paginate<T>(data: T[], paginationOptions: PaginationOptions): PaginatedData<T[]> {
  const { startIndex, endIndex } = prepareIndexes(paginationOptions);
  const records = data.slice(startIndex, endIndex);
  const total = data.length;
  return {
    page: paginationOptions.page,
    pageSize: paginationOptions.pageSize,
    data: records,
    total,
  };
}

function prepareIndexes(paginationOptions: PaginationOptions): {
  startIndex: number;
  endIndex: number;
} {
  const { page, pageSize } = paginationOptions;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  return { startIndex, endIndex };
}

export default paginate;
