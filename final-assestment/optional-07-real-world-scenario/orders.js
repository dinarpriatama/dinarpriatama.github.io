// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0); // Menghitung total harga
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status default
  };
  orders.push(newOrder); // Menambahkan pesanan baru ke dalam orders
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status; // Mengubah status pesanan
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai') // Hanya hitung pesanan yang selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Menjumlahkan total harga pesanan selesai
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id); // Menghapus pesanan berdasarkan ID
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
