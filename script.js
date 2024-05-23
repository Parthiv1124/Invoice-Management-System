document.addEventListener('DOMContentLoaded', function myShowFunction() {
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
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});


/*window.onload = function() {
    const Invoice = localStorage.getItem('invoice-number');
    const Customer = localStorage.getItem('customer-name');
    const Issue  = localStorage.getItem('customer-name');
    const Due  = localStorage.getItem('customer-name');
    const Status = localStorage.getItem('customer-name');
    
    
        document.getElementById('Invoice').innerText = Invoice;
        document.getElementById('Customer').innerText = Customer;
        document.getElementById('Issue Date').innerText = Issue;
        document.getElementById('Due Date').innerText = Due;
        document.getElementById('Status').innerText = Status;
    
}*/