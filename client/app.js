//* {"nextid":1} copy paste to reset json format
const chirpnameDisplay = document.querySelector("#chirpnametext");
const chirptitleDisplay = document.querySelector("#chirptitletext");
const chirppostDisplay = document.querySelector("#chirpboxtext");
let initialLoadState = 0;

$(document).ready(function () {
  //* Overview: Code an app that uses jQuery to call your API and displays chirps

  //* Use a button click event to call the API.
  //* This click function creates a chirp post when #chirpBtn is clicked
  $("#chirpBtn").click(function () {
    initialLoadState++;
    //* FETCH IS INSIDE BROWSER NO NEED TO IMPORT
    const chirpObj = {
      chirpname: $("#chirpname").val(),
      chirptitle: $("#chirptitle").val(),
      chirppost: $("#chirpbox").val(),
    };
    fetch("/api/chirps/", {
      method: "post",
      body: JSON.stringify(chirpObj),
      //* server looks at headers before body so client has to tell server what type of data it is getting IMPT or EMPTY OBJECT NIGHTMARE!
      headers: { "Content-type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    //alert("Your Chirp has been Posted");
    $.getJSON("/api/chirps/", function (data) {
      let chirps = "";

      // ITERATING THROUGH OBJECTS
      $.each(data, function (key, jsonData) {
        console.log(data);
        //CONSTRUCTION OF CARD "HTML OBJECT"
        // DATA FROM JSON OBJECT
        if ((initialLoadState = 0)) {
          chirps += `<div class=` + "card>";
          chirps += "<div class=" + "card-body" + ">";
          chirps += "<h4>" + jsonData.chirpname + "</h4>";
          chirps += "<h5>" + jsonData.chirptitle + "</h5>";
          chirps += "<p>" + jsonData.chirppost + "</p>";
          chirps += "</div>";
          chirps += "</div>";
          console.log(jsonData.chirpname);
          console.log(jsonData.chirptitle);
          console.log(jsonData.chirppost);
          console.log(jsonData);
        } else {
          $(".card").remove();
          chirps += "<div class=" + "card>";
          chirps += "<div class=" + "card-body" + ">";
          chirps += "<h4>" + jsonData.chirpname + "</h4>";
          chirps += "<h5>" + jsonData.chirptitle + "</h5>";
          chirps += "<p>" + jsonData.chirppost + "</p>";
          chirps += "</div>";
          chirps += "</div>";
          console.log(jsonData.chirpname);
          console.log(jsonData.chirptitle);
          console.log(jsonData.chirppost);
          console.log(jsonData);
        }
      });

      //INSERTING ROWS INTO TABLE
      $("#root").append(chirps);
    });
  });

  //* Add an x next to each chirp that will delete the chirp when clicked.
  //* When a chirp is clicked, popup a modal that lets you edit the chirp.
  //* HINT: jQuery functions for calling APIs: $.ajax, $.get, $.post
});
