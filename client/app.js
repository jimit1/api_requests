$(document).ready(() => {
  //Basic
  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test",
      dataType: "json",
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        $.ajax({
          type: "GET",
          url: "/api/count",
          dataType: "json",
        }).then((res) => {
          console.log(res);
          $(".text").html(`Count: ${res.count}`);
        });
      });
  });
});
