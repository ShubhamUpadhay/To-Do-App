$(document).ready(function () {
  console.log("hello");
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let yr = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    if (day === 0) {
      day = "SUN";
    }
    if (day === 1) {
      day = "MON";
    }
    if (day === 2) {
      day = "TUE";
    }
    if (day === 3) {
      day = "WED";
    }
    if (day === 4) {
      day = "THUR";
    }
    if (day === 5) {
      day = "FRI";
    }
    if (day === 6) {
      day = "SAT";
    }
    if (month === 0) {
      month = "Jan";
    }
    if (month === 1) {
      month = "Feb";
    }
    if (month === 2) {
      month = "Mar";
    }
    if (month === 3) {
      month = "Apr";
    }
    if (month === 4) {
      month = "May";
    }
    if (month === 5) {
      month = "Jun";
    }
    if (month === 6) {
      month = "Jul";
    }
    if (month === 7) {
      month = "Aug";
    }
    if (month === 8) {
      month = "Sep";
    }
    if (month === 9) {
      month = "Oct";
    }
    if (month === 10) {
      month = "Nov";
    }
    if (month === 11) {
      month = "Dec";
    }
    $("#date").text(h + ":" + m + ":" + s);
    document.getElementById("cal").innerHTML =
      day + " , " + date + "-" + month + "-" + yr;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) i = "0" + i;
    return i;
  }
  startTime();


    $('#userButton').click(()=>{
      if(document.getElementById('userName').value!=""){
        $("#user").text(document.getElementById('userName').value)}
        else(alert('Please Provide Your Name'))
        document.getElementById("UserNameDiv").style.display="none"
    })
 
  




  function dateGetter() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let day = today.getDay();
    if (day === 0) {
      day = "SUN";
    }
    if (day === 1) {
      day = "MON";
    }
    if (day === 2) {
      day = "TUE";
    }
    if (day === 3) {
      day = "WED";
    }
    if (day === 4) {
      day = "THUR";
    }
    if (day === 5) {
      day = "FRI";
    }
    if (day === 6) {
      day = "SAT";
    }
    let out = "Created on " + day + " at " + h + ":" + m;
    return out;
  }
  function keyGen() {
    const today = new Date();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ms = today.getMilliseconds();
    let Key = m + "" + s + "" + "" + ms;
    return Key;
  }
  function dataFromLocal() {
    let status = $("h5").attr("id", "status");
    let temp1 = JSON.parse(localStorage.getItem("ToDo"));
    if (temp1) {
      for (i = 0; i < temp1.length; i++) {
        let card = $("<div>");
        $(".list").append(
          card
            .addClass("itemcontainer")
            .attr("id", temp1[i].ID)
            .append(
              $("<div>")
                .addClass("contentholder")
                .append(
                  $("<h3>").addClass("taskName").text(temp1[i].Task),
                  $("<h3>")
                    .attr("id", "taskTime")
                    .text(temp1[i].at)
                    .append(status)
                ),
              $("<div>")
                .addClass("menuHolder")
                .append(
                  $("<i>")
                    .addClass("far fa-trash-alt")
                    .attr("id", "deletedots")
                    .click(() => {
                      let cardId = card[0].attributes[1].nodeValue;
                      let localData = JSON.parse(localStorage.getItem("ToDo"));
                      for (let i = 0; i < localData.length; i++) {
                        if (localData[i].ID === cardId) {
                          localStorage.setItem(
                            "ToDo",
                            JSON.stringify(
                              localData
                                .slice(0, i)
                                .concat(localData.slice(i + 1))
                            )
                          );
                          break;
                        }
                      }
                      card.remove();
                    })
                )
            )
            .dblclick(() => {
              let cardId = card[0].attributes[1].nodeValue;
              let localData = JSON.parse(localStorage.getItem("ToDo"));
              for (let i = 0; i < localData.length; i++) {
                if (localData[i].ID === cardId) {
                  localData[i].status = "done";
                  localStorage.setItem("ToDo", JSON.stringify(localData));
                  document.getElementById(cardId).style.cssText="background:yellowgreen;opacity:0.5;text-decoration:line-through;color:white";
                }
              }
            })
        );
      }
    }
    if (temp1) {
      for (let i = 0; i < temp1.length; i++) {
        if (temp1[i].status === "done") {
          document.getElementById(temp1[i].ID).style.cssText="background:yellowgreen;opacity:0.5;text-decoration:line-through;color:white";
        }
      }
    }
  }
  dataFromLocal();

  function createCard(a, b) {
    let temptime = b;
    let keyGenerator = keyGen();
    let card = $("<div>");
    let status = $("h5").attr("id", "status");
    $(".list").append(
      card
        .addClass("itemcontainer")
        .attr("id", keyGenerator)
        .append(
          $("<div>")
            .addClass("contentholder")
            .append(
              $("<h3>").addClass("taskName").text(a),
              $("<h3>").attr("id", "taskTime").text(temptime).append(status)
            ),
          $("<div>")
            .addClass("menuHolder")
            .append(
              $("<i>")
                .addClass("far fa-trash-alt")
                .attr("id", "deletedots")
                .click(() => {
                  let cardId = card[0].attributes[1].nodeValue;
                  let localData = JSON.parse(localStorage.getItem("ToDo"));
                  for (let i = 0; i < localData.length; i++) {
                    if (localData[i].ID === cardId) {
                      localStorage.setItem(
                        "ToDo",
                        JSON.stringify(
                          localData.slice(0, i).concat(localData.slice(i + 1))
                        )
                      );
                      break;
                    }
                  }
                  card.remove();
                })
            )
        )
        .dblclick(() => {
          let cardId = card[0].attributes[1].nodeValue;
          let localData = JSON.parse(localStorage.getItem("ToDo"));
          for (let i = 0; i < localData.length; i++) {
            if (localData[i].ID === cardId) {
              localData[i].status = "done";
              localStorage.setItem("ToDo", JSON.stringify(localData));
              document.getElementById(localData[i].ID).style.cssText="background:yellowgreen;opacity:0.5;text-decoration:line-through;color:white";
            }
          }
        })
    );

    let arr = [];
    let obj = {
      ID: keyGenerator,
      Task: a,
      at: temptime,
      status: "pending",
    };
    let localData = JSON.parse(localStorage.getItem("ToDo"));
    if (localData) {
      localData.push(obj);
      localStorage.setItem("ToDo", JSON.stringify(localData));
    } else {
      arr.push(obj);

      localStorage.setItem("ToDo", JSON.stringify(arr));
    }
  }

  $("#addTaskButton").click(() => {
    let inp = document.getElementById("taskfield").value;
    if (inp === "") alert("No task to add");
    else {
      createCard(inp, dateGetter());
      document.getElementById("taskfield").value = "";
    }
  });
});
