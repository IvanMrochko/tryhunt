function getLabelById(id: number, arr: any[]) {
  const item = arr.find(item => item.id === id);
  return item ? item.label : '';
}

export {getLabelById};
