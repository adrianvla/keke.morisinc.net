if (!checkCookie("hctrackername")) {

    shownotif(read("form.html"), 0, 1, true, "tr");

} else {
    shownotif("Hello, " + getCookie("hctrackername") + "! Welcome again!! ^-O-^" + "</span><center class=smallpointer onclick=forget()>Forget Me</center></a>", 3000, 2, true, "tr");
}







function submitted() {
    var trackervalue = document.getElementById("nametracker").value;
    if (trackervalue != "") {
        hidenotif(1, "tr");
        setNEXCookie("hctrackername", trackervalue);
        setTimeout(function() {

            shownotif("Hello, " + trackervalue + "! Welcome to my site!! ^-O-^", 3000, 2, true, "tr");
        }, 1000);
    } else {
        shakenotif(1, "tr");
    }

}





function forget() {
    deleteCookie("hctrackername");
    giveclass("animate__jello", 2, "tr");
}





function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // add other defaults here if necessary
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// Example of use:
//setCookie('user', 'John', { secure: true, 'max-age': 3600 });

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

function checkCookie(cname) {
    if (getCookie(cname) == undefined || getCookie(cname) == "") {
        return false;
    } else {
        return true;
    }

}



function setNEXCookie(cname, cvalue) {
    setCookie(cname, cvalue, { secure: true, 'max-age': 3600 });
}