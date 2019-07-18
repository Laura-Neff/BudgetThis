$(document).ready(function() {

    $(document).on("submit", "#transaction-form", transactionFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Author
    function transactionFormSubmit(event) {
        event.preventDefault();
        console.log("meow")
        var transaction = {
            type: $("#type :selected").val(),
            amount: parseFloat($("#amount").val()),
            memo: $("#memo").val()
        }
        console.log(transaction);
        $.post("/api/transactions", transaction)
            .then(function(res) {

            });

    }
});