
document.addEventListener('DOMContentLoaded', function () {
    var invoicesLink = document.getElementById('invoices');
    var submenuInvoices = document.getElementById('submenu-invoices');

    invoicesLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        if (submenuInvoices.style.display === 'none') {
            submenuInvoices.style.display = 'block';
        } else {
            submenuInvoices.style.display = 'none';
        }
    });

    var form = document.getElementById('invoice-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        alert('Invoice created successfully!');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var invoicesLink = document.getElementById('invoices');
    var submenuInvoices = document.getElementById('submenu-invoices');
    
    invoicesLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        if (submenuInvoices.style.display === 'none') {
            submenuInvoices.style.display = 'block';
        } else {
            submenuInvoices.style.display = 'none';
        }
    });

    
    var itemQuantity = document.getElementById('item-quantity');
    var itemPrice = document.getElementById('item-price');
    var totalAmount = document.getElementById('total-amount');
    var amountPaid = document.getElementById('amount-paid');
    var remamt = document.getElementById('rem-amt');
    
    function updateTotalAmount() {
        var quantity = parseFloat(itemQuantity.value) || 0;
        var price = parseFloat(itemPrice.value) || 0;
        var total = quantity * price;
        totalAmount.value = total.toFixed(2); 
    }
    function updateRemainingAmount() {
        var amtpaid = parseFloat(amountPaid.value) || 0;
        var totamt = parseFloat(totalAmount.value) || 0;
        var total1 = totamt - amtpaid;
        remamt.value = total1.toFixed(2);
    }

    itemQuantity.addEventListener('input', updateTotalAmount);
    itemPrice.addEventListener('input', updateTotalAmount);
    totalAmount.addEventListener('input', updateRemainingAmount);
    amountPaid.addEventListener('input',updateRemainingAmount);
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
/*function saveFormData() {
    const Invoice = document.getElementById('invoice-number').value;
    const Customer = document.getElementById('customer-name').value;
    const Issue  = document.getElementById('customer-name').value;
    const Due  = document.getElementById('customer-name').value;
    const Status = document.getElementById('customer-name').value;
    
    localStorage.setItem('invoice-number', Invoice);
    localStorage.setItem('customer-name', Customer);
    localStorage.setItem('invoice-date', Issue );
    localStorage.setItem('due-date', Due );
    localStorage.setItem('status', Status);
    
}*/