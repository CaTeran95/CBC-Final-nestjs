// console.log('It works');
const addProductToTable = ({ thumbnail, title, stock, price, UUID }) => {
  let newProductRow = document.createElement('tr');
  newProductRow.innerHTML = `
  <tr>
    <td><img src="${thumbnail}" alt="${title}" /></td>
    <td>${title}</td>
    <td>${stock}</td>
    <td>${price}</td>
    <td><button onclick="addToCart('${UUID}')">Buy</i></button>
    </td>
  </tr>`;
  return newProductRow;
};

(async () => {
  const res = await fetch('/product');
  const products = await res.json();
  // console.log(products);
  const tableBody = document.querySelector('tbody');
  for (const product of products) {
    const newProductRow = addProductToTable(product);
    tableBody.append(newProductRow);
  }
})();
