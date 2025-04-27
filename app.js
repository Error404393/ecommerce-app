async function loadProducts() {
  const response = await fetch('http://47.245.100.71:3000/products');
  const products = await response.json();
  const container = document.getElementById('product-list');

  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded shadow-md';
    div.innerHTML = `
      <img src="${product.image_url}" alt="${product.name}" class="w-full h-48 object-cover mb-4">
      <h2 class="text-xl font-bold">${product.name}</h2>
      <p class="text-gray-600">Rp ${product.price}</p>
    `;
    container.appendChild(div);
  });
}

loadProducts();
