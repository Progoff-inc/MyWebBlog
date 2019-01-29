export class PaginationService{
    setPages(items, n = 10){
        let pagedItems = [];
        while(items.length>0){
            pagedItems.push(items.splice(0,n));
        }
        return pagedItems;
    }
}