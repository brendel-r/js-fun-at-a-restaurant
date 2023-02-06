function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(orders)
  return deliveryOrders 
}
}

function refundOrder(orderToRefund, deliveryOrders) {
  for(i= 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderToRefund) {
      deliveryOrders.splice([i], 1)
    }
  }
  return deliveryOrders
}

function listItems(deliveryOrders) {
  var items = []
  for (i = 0; i < deliveryOrders.length; i++) {
  items.push(deliveryOrders[i].item)
  } 
return items.join(', ')                 
}

function searchOrder(deliveryOrders, itemName){
  for(i = 0; i < deliveryOrders.length; i++) 
    if(deliveryOrders[i].item === itemName) {
    return true
    } 
    return false
    
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}