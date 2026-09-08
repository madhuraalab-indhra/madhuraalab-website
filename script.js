/* MADHURAA DIAGNOSTICS */

document.addEventListener("DOMContentLoaded", function(){

    console.log("Madhuraa Diagnostics Website Loaded");

});

/* Future Modal Function */

function openModal(id){
    document.getElementById(id).style.display="block";
}

function closeModal(id){
    document.getElementById(id).style.display="none";
}

/* Future WhatsApp Booking */

function whatsappBooking(message){

    const phone = "919342627757";

    const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

    window.open(url,"_blank");

}