export function removeSearchedItem(searchedItem) {
  const deleteSearchedItem = (id) => {
    const finedItemToDelete = searchedItem.value.findIndex(
      (item) => item.id === id
    );

    if (finedItemToDelete !== -1) {
      searchedItem.value.splice(finedItemToDelete, 1);
    }
  };

  return {
    deleteSearchedItem,
  };
}
