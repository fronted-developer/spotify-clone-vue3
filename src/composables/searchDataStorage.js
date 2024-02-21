import { onMounted, watch } from "vue";

export function searchDataStorage(searchedItem) {
    const localStorageData = () => {
        watch(
          () => searchedItem,
          (newSearchedItem) => {
            localStorage.searchData = JSON.stringify(newSearchedItem);
          },
          { deep: true }
        );
      
        let searchStore = localStorage.searchData;
      
        onMounted(() => {
          if (searchStore) {
            searchedItem.value = JSON.parse(searchStore)._value;
          }
        });

    }

  return {
    localStorageData,
  };
}
