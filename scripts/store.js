'use strict';
/* global shoppingList, cuid, Item */
const store = (function (){
    
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false ;
  const searchTerm = '';

  const findByID = function(id){
    return store.items.find(id);
  };

  const addItem = function(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(e){
      console.log(e.message);
    }
  };

  const findAndToggleChecked = function(id){
    this.findByID(id).checked = !this.findByID(id).checked;
  };

  const findAndUpdateName = function(id, newName){
    this.findByID(id).name = newName;
  };

  const findAndDelete = function(id){
    const itemIndex = this.items.findIndex(id => id === id);
    store.items.splice(itemIndex,1);
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findByID,
    addItem,
    findAndToggleChecked,
    findAndDelete,
    findAndUpdateName
  };

}() );
