$(document).ready(function() {

  $.get("/api/transactions").then(function(data) {
    $(".amt").text("data.id + data.amt");
    console.log(data)
  });


$(".submit-request").on("click", function (e) {
    e.preventDefault();
    var amount = $("#amount").val().trim();
    var voucherNum = $("#voucherNum").val().trim();
   
    var pendingData = {
        userId: "1",
        amount: amount,
        voucherNum: voucherNum
    }
     console.log(pendingData)
    if (!pendingData.amount || !pendingData.voucherNum) {
        return;
      }

      pendingPost(pendingData.userId, pendingData.amount, pendingData.voucherNum);
  });
        

function pendingPost(id, amount, voucherNum) {
    $.post("/api/transactions", {
        userId: id,
        amount: amount,
        voucherNum: voucherNum
    }).then(function(data) {
      window.location.reload();
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }


});

