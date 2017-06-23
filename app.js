(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.moveItem = function (itemName, quantity, itemIndex) {
    ShoppingListCheckOffService.moveItem(itemName, quantity, itemIndex)
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService(){
  var service = this;

  var buyItemsList = [];
  var boughtItemsList = [];

  for (var i = 5; i>0; i--){
    var item = {
      name: "Peanuts",
      quantity: i
    };
    buyItemsList.push(item);
  }

  service.moveItem = function (itemName, quantity, itemIndex) {
    service.addItem(itemName, quantity);
    service.removeItem(itemIndex)
  }

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItemsList.push(item);
  };

  service.removeItem = function (itemIndex) {
    buyItemsList.splice(itemIndex, 1);
  };

  service.getBuyItems = function () {
    return buyItemsList;
  };

  service.getBoughtItems = function () {
    return boughtItemsList;
  };
}

})();
