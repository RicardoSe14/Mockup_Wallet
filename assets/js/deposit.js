$(document).ready(function() {
    var balance = 1000000;
  
    function updateBalance() {
      $('#balance').text("$" + balance.toFixed(0) + " CLP");
    }
  
    $('#depositBtn').click(function() {
      var amount = parseFloat($('#amount').val());
      if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        $('#amount').val('');
        alert('Deposito realizado!');
      } else {
        alert('Monto invalido. Por favor ingrese un número positivo.');
      }
    });
  
    $('#withdrawBtn').click(function() {
      var amount = parseFloat($('#amount').val());
      if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        $('#amount').val('');
        alert('Retiro exitoso!');
      } else {
        alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
      }
    });
  });
