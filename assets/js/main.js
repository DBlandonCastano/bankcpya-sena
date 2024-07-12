function showInicio(){
    var cuenta=document.getElementsByClassName("cuenta")[0];
    var modal_b=document.getElementsByClassName("modal-b")[0];
    var tradicional_p=document.getElementsByClassName("tradicional-p")[0];
    var nomina_p=document.getElementsByClassName("nomina-p")[0];
    var t_credito=document.getElementsByClassName("t-credito")[0];
    var carac_cont=document.getElementsByClassName("carac-cont")[0];
    var prestamo=document.getElementsByClassName("prestamo")[0];
    cuenta.style.visibility="hidden";
    cdt.style.visibility="hidden";
    modal_b.style.visibility="hidden";
    tradicional_p.style.visibility="hidden";
    nomina_p.style.visibility="hidden";
    tipcdt.style.visibility="hidden";
    reqcdt.style.visibility="hidden";
    t_credito.style.visibility="hidden"
    trad1.style.visibility="hidden";
    carac_cont.style.visibility="hidden";
    amparada.style.visibility="hidden";
    prestamo.style.visibility="hidden";
}

function showHide(){
    var cuenta=document.getElementsByClassName("cuenta")[0];
    if (cuenta.style.visibility=="hidden"){
        cuenta.style.visibility="visible";
        cdt.style.visibility="hidden";
    }
    var cdt=document.getElementsByClassName("cuenta")[0];
    function show(){
        if (cdt.style.visibility=="hidden"){
            cdt.style.visibility="visible";
            cuenta.style.visibility="hidden";
        }
    }
}