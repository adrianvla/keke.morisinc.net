// NOTIFSYSTEM
//
// COPYRIGHT ADRIAN VLASOV
//2020
//morisinc.net
//
//


window.onload = function() {
    /*
    let _animatestyle = document.createElement("link");
    _animatestyle.rel = "stylesheet";
    _animatestyle.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    document.getElementsByTagName("HEAD")[0].appendChild(_animatestyle);



    let _stylenotif = "._notif_tr {width: 500px;height: 20rem;position: fixed;display: flex;top: 20px;right: 20px;z-index: 9999;border-radius: 30px 30px 30px 30px;box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);transition: 1s all;}._notif_tl {width: 500px;height: 20rem;position: fixed;display: flex;top: 20px;left: 20px;z-index: 9999;border-radius: 30px 30px 30px 30px;box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);transition: 1s all;}._notif_br {width: 500px;height: 20rem;position: fixed;display: flex;bottom: 20px;right: 20px;z-index: 9999;border-radius: 30px 30px 30px 30px;box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);transition: 1s all;}._notif_bl {width: 500px;height: 20rem;position: fixed;display: flex;bottom: 20px;left: 20px;z-index: 9999;border-radius: 30px 30px 30px 30px;box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);transition: 1s all;}._notifholder {position: absolute;}._notifcontent {margin-left: 15px;margin-top: 15px;word-break: break-word;margin-bottom: 15px;margin-right: 15px;font-size: 30px;}._notifbtn {margin-left: 15px;margin-top: 0px;word-break: keep-all;font-size: 40px;height: 0px;cursor: pointer;}.backdropblur {backdrop-filter: blur(10px);background-color: rgba(255, 255, 255, 0.781);}";
    let _notifstyle = document.createElement("style");
    _notifstyle.textContent = _stylenotif;
    document.getElementsByTagName("HEAD")[0].appendChild(_notifstyle);
    */
}






function shownotif(html, time, id, button, where) {
/*
    //let notifdiv1 = document.createElement("div");
    //notifdiv1.className += "_notifholder";
    //notifdiv1.id = "notifholder_" + id;
    let cl = "_notif_" + where;
    let notifdiv2 = document.createElement("div");
    notifdiv2.className += cl + " animate__animated animate__zoomIn backdropblur _notif";

    notifdiv2.id = "_notifdiv2_" + id;
    let notifdiv3 = document.createElement("div");
    notifdiv3.className += "_notifcontent";
    notifdiv3.innerHTML = html;
    if (button == true) {
        let notifdiv3_1 = document.createElement("btn");
        notifdiv3_1.className += "_notifbtn";
        notifdiv3_1.innerHTML = "x";
        notifdiv3_1.onclick = function() { hidenotif(id, where) };

        notifdiv2.appendChild(notifdiv3_1);
    }

    //notifdiv1.appendChild(notifdiv2);
    notifdiv2.appendChild(notifdiv3);

    document.getElementsByTagName("BODY")[0].appendChild(notifdiv2);


    /*try {
        var prevnotifarray = document.getElementsByClassName(cl);
        for (let i = 0; i < prevnotifarray.length; i++) {
            console.log(i);
            console.log("LOG: " + prevnotifarray[i]);
            let prevnotifel = prevnotifarray[i];
            prevnotifel.style["top"] = i * 1000 + 20;
        }


    } catch (e) {
        //console.log(e.message);
    }*/
/*

    if (time == 0) {



    } else {
        setTimeout(function() {
            hidenotif(id, where);

        }, time);


    }*/
}


function hidenotif(id, cl) {
/*
    try {
        let notifdiv1 = document.getElementById("notifholder_" + id);
        let notifdiv2 = document.getElementById("_notifdiv2_" + id);
        notifdiv2.className = "_notif_" + cl + " animate__animated animate__zoomOut backdropblur _notif";
        setTimeout(function() {
            notifdiv2.remove();

        }, 1000);
        console.log(id + "  " + cl);
    } catch (e) {
        console.log("ERROR: " + e.message);
    }*/
}



function shakenotif(id, cl) {
    /*
    document.getElementById("_notifdiv2_" + id).className = "_notif_" + cl + " animate__animated animate__shakeX backdropblur _notif";
    setTimeout(function() {

        document.getElementById("_notifdiv2_" + id).className = "_notif_" + cl + " animate__animated backdropblur _notif";
    }, 1000);*/
}


function giveclass(classs, id, cl) {
    /*
    document.getElementById("_notifdiv2_" + id).className = "_notif_" + cl + " animate__animated " + classs + " backdropblur _notif";
    setTimeout(function() {

        document.getElementById("_notifdiv2_" + id).className = "_notif_" + ucl + " animate__animated backdropblur _notif";
    }, 1000);
    */
}