export function selectBook(book) {
  // selectBook is an ActionCreator that must return an Action
  // 
  return {
    type: 'BOOK_SELECTED', //type of action
    payload: book 
  };
}

