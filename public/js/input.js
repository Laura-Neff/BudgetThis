$(document).ready(function() {
<<<<<<< HEAD
  $(document).on("submit", "#transaction-form", transactionFormSubmit);

  // A function to handle what happens when the form is submitted to create a new Author
  function transactionFormSubmit(event) {
    event.preventDefault();
    var transaction = {
      type: $("#type :selected").val(),
      amount: parseFloat($("#amount").val()),
      memo: $("#memo").val()
    };
    $.post("/api/transactions", transaction)
      .then(console.log("Added transaction"));
    location.reload();
  }
});
=======

    $(document).on("submit", "#transaction-form", transactionFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Author
    function transactionFormSubmit(event) {
        event.preventDefault();
        var transaction = {
            type: $("#type :selected").val(),
            amount: parseFloat($("#amount").val()),
            memo: $("#memo").val()
        }
        $.post("/api/transactions", transaction)
            .then(console.log("Added transaction"));
        location.reload();
    }
});
>>>>>>> e72b120915d9f6c1df5d83ed5305d38a4ebaae23
