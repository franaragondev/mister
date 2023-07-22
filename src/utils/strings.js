export const sorting = (arrayToOrder, orderBy, order) => arrayToOrder?.sort((a, b) => {
    if (a[orderBy]?.toString().toLowerCase() < b[orderBy]?.toString().toLowerCase()) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy]?.toString().toLowerCase() > b[orderBy]?.toString().toLowerCase()) {
      return order === 'asc' ? 1 : -1;
    }
  
    return 0;
  });