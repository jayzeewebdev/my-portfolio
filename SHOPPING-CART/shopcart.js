 // Select buttons by class or data attribute
    const addButtons = document.querySelectorAll('.add-btn'); // or button[data-action="add"]
    const deleteButtons = document.querySelectorAll('.delete-btn'); // or button[data-action="delete"]
    const checkoutButton = document.querySelector('.checkout-button');

      addButtons.forEach(button => {
        button.addEventListener('click', function () {
          const row = button.closest('tr');
          const quantityCell = row.cells[3];
          const priceCell = row.cells[2];
          const totalCell = row.cells[4];

          // Increment quantity
          let quantity = parseInt(quantityCell.textContent) + 1;
          quantityCell.textContent = quantity;

          // Update total (now using the parsed quantity variable)
          totalCell.textContent = (quantity * parseFloat(priceCell.textContent)).toFixed(2);
        });
      });

    deleteButtons.forEach(button => {
      button.addEventListener('click', function () {
        const row = button.closest('tr');
        const quantityCell = row.cells[3];
        const priceCell = row.cells[2];
        const totalCell = row.cells[4];

        // Decrement quantity but not below 0
        let quantity = parseInt(quantityCell.textContent);
        if (quantity > 0) {
          quantity -= 1;
          quantityCell.textContent = quantity;
          totalCell.textContent = (quantity * parseFloat(priceCell.textContent)).toFixed(2);
        }
      });
    });

checkoutButton.addEventListener('click', function () {
  const rows = document.querySelectorAll("table tr");
  let grandTotal = 0;

  rows.forEach((row, index) => {
    if (index === 0) return; // skip header
    const totalCell = row.cells[4];
    grandTotal += parseFloat(totalCell.textContent);
  });

  // Display on the page
  document.getElementById("checkout-display").innerHTML = 
    `Total Order Amount: <b>R ${grandTotal.toFixed(2)}</b>`;
});
