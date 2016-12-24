/**
 * Created by Amine on 27/11/2016.
 */


$(document).ready(function () {

    $('button').click(function () {
        if($('#commentaire').val() === "Idiot" || $('#commentaire').val() === "Débile" ||$('#commentaire').val() === "Ignare" ){
            alert("Restez tranquille sinon vous serez supprimer, merci")
        }
    })

})