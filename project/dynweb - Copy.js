/*

COPYRIGHT A.V.
HTTPS://WWW.MORISINC.NET

DYNAMIC WEBPAGE ENGINE






*/
$('.cross').on('click',function(){
    $('.notice').remove();
})

gsap.registerPlugin(MotionPathPlugin);
var start = setTimeout(function () {
    load();
}, 1);
var loop = setInterval(function () {
    tick();
}, 1);

function setTitle(text) {
    document.title = text;
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var a = location.hash.replace("#", "");
var article = location.hash;
var content = document.getElementById("content");
var translator = document.getElementById("translator");
var iread = JSON.parse(read("article/data.json"));

function load() {
    if(location.hash == "#" || location.hash == ""){
        $('#content').removeClass('textinside');
    }else{
        $('#content').addClass('textinside');
    }
    iread = JSON.parse(read("article/data.json"));
    article = location.hash;
    console.log(iread);
    a = location.hash.replace("#", "");
    if (a == "" || a == "0") {
        //url_content("a/home.html").success(function(data) {
        //    content.innerHTML = data;
        //});
        transi(true);
        console.log(iread);
        console.log(create(iread));

        //if (hasClass(body, "scaleout")) {
        //    body.classList.toggle("scaleout");
        //}

        clearInterval(bossbarinterval);

        setTimeout(function (){
            $('.loading-c').addClass("ui");},500);

gsap.to('.loading-c',{duration:0.5,opacity:0});
        content.innerHTML = create(iread);
    } else {

        if (iread[article] == undefined) {
            console.log("getting html");
            content.innerHTML = read("article/" + a + ".html");
    clearInterval(bossbarinterval);
            
            setTimeout(function (){
                $('.loading-c').addClass("ui");},500);

gsap.to('.loading-c',{duration:0.5,opacity:0});
            //if (hasClass(body, "scaleout")) {
            //    body.classList.toggle("scaleout");
            //}
            transi(true);
        }
        if (iread[article] != undefined) {
            transi(true);
            console.log("getting iframe")
            console.log(iread[article]);


            fetch('https://api.codetabs.com/v1/proxy?quest=planetminecraft.com/data-pack/' + iread[article]).then((response) => response.text()).then((text) => displayiframe(text));

            function displayiframe(text) {
                try{clearInterval(bossbarinterval);}catch(e){}
                
                // if (hasClass(body, "scaleout")) {
                //     body.classList.toggle("scaleout");
                //}
    clearInterval(bossbarinterval);

                setTimeout(function (){
                    $('.loading-c').addClass("ui");},500);

    gsap.to('.loading-c',{duration:0.5,opacity:0});
                transi(true);
                translator.innerHTML = text;
                content.innerHTML = "<div class=download><div class=downloadbutton><a class=btn onclick=support(`" + iread["link" + article] + "`);" + `><span class="downloadtext">Download</span><div class="downloadsvg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.7 215.6" style="enable-background:new 0 0 157.7 215.6" xml:space="preserve"><style>.st11{fill:none;stroke:#0561fc;stroke-width:6.8376}</style><g id="Layer_4"><path style="fill:#eaf4fe" d="M0 215.6v-174L41.6 0h116.1V215.6z"/><path style="fill:#0561fc" d="M41.6 41.6H0L41.6 0z"/><path style="fill:#c5e1f9" d="M0 41.6h41.6L0 83.2z"/><g><path class="st11" d="M79.4 89.2V96M79.4 102.9v6.8M79.4 119.9v6.9M62.1 75.5v58.1H48.6l15.3 22.2 15.3 22.3 15.3-22.3 15.3-22.2H96.3V75.5"/></g></g></svg></div></a></div>` + "<div class=holder id=imgc></div>" + "<div class=holder>" + document.getElementById("r-text-block").innerHTML + "</div></div>";
                //console.log(document.getElementById("r-text-block").textContent);

                try {
                    document.getElementById("imgc").innerHTML = `<div class="splide">` + document.getElementById("tab_image_gallery").innerHTML.replace('fwImage col span_4', 'splide__track').replaceAll('gSlide', 'splide__slide') + `</div>`;
                    setTimeout(async function () {
                        var pw = [];
                        var y = '';
                        $('.splide__slide img').each(function (i, self) {
                            var tt = document.createElement("IMG");
                            tt.src = self.src;
                            pw.push(tt);
                        });
                        pw.forEach(function (item, i) {
                            y = y + `<li class="splide__slide"><div class="slidder">` + item.outerHTML + `</div></li>`;
                        });

                        var r = `<div class="splide uty">
                        <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev">
			<img src="arrow.png">
		</button>
		<button class="splide__arrow splide__arrow--next">
        <img src="arrow.png">
		</button>
  </div>
                        <div class="splide__track">
                              <ul class="splide__list">` + y + `
                              </ul>
                        </div>
                        
  <div class="splide__progress">
  <div class="splide__progress__bar">
  </div>
</div>
                      </div>`;
                        document.getElementById("imgc").innerHTML = r;
                        setTimeout(function () {
                            new Splide('.splide', {

                                type: 'loop',
                                autoplay: true
                            }).mount();
                        }, 20);
                    }, 20);

                } catch (err) {
                    console.log(err.message);
                }
                try {
                    document.getElementById("imgc").innerHTML = document.getElementById("tab_video_gallery").innerHTML;

                } catch (err) {
                    console.log(err.message);
                }
                translator.innerHTML = "";
            }

        }

    }
}

function read(remote_url) {
    return $.ajax({
        type: "GET",
        url: remote_url,
        async: false
    }).responseText;
}

var a_old = location.hash;
var a_new = location.hash;

function tick() {
    if (a_old != a_new) {
        if(location.hash == "#" || location.hash == ""){
            $('#content').removeClass('textinside');
        }else{
            $('#content').addClass('textinside');
        }
        transition();
        a_old = location.hash;

    }
    a_new = location.hash;

}

var body = document.getElementsByTagName("body")[0];
var trans = document.getElementById("trans");

function transition() {
    content.innerHTML = read("article/loader.html");
    clearInterval(bossbarinterval);
    $('.loading-c').removeClass("ui");
    $('.loading-c').css('opacity','0');
    gsap.to('.loading-c',{duration:0.5,opacity:1});
    bossbar();
    //if (hasClass(trans, "animate")) {} else {
    //    trans.classList.toggle("animate");
    //    setTimeout(function() { trans.classList.toggle("animate"); }, 2000);
    //}
    transi(false);
    load();
}


function create(json) {
    let length = json["length"];
    let element = [];
    for (i = 0; i < length; i++) {
        let el = createelement(length - i + 0, json);
        element.push(el);
    }

    function createelement(id, data) {
        let img = data[id];
        let name = data[id + "n"];
        let url = data[id + "url"];
        return "<div class=holder><a href=" + url + "><div class=project><div class=image><img src=" + img + "></div><div class=title>" + name + "</div></div></a></div>"
    }

    return element.join('');
}


function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}



var wrapper = document.getElementById("wrapper");

function transi(a) {
    return
    if (a) {
        if (hasClass(wrapper, "fadeout")) {
            wrapper.classList.toggle("fadeout");

        }
    } else {
        if (hasClass(wrapper, "fadeout")) {} else {
            wrapper.classList.toggle("fadeout");

        }
    }
}


var wnd;

function support(url) {




    var tim = 0;
    
    $('.subtd-c').removeClass('ui');
    $('.subtd-c').css('opacity','0');
    gsap.to('.subtd-c',{duration:0.3,opacity:1})
    //window.open(url);
    var old = 0;
    var now;/*
    tippy('.ntkng', {
        content: "Will unlock in 1 minute",
        allowHTML: true,
        followCursor:true
      });*/
    
    $('#subscribebtn').on('click', function () {
        //wnd = window.open("https://www.youtube.com/channel/UCmKdE4TgNlIJRoe0HLzvpJA?sub_confirmation=1", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        wnd = window.open("https://www.youtube.com/channel/UCmKdE4TgNlIJRoe0HLzvpJA?sub_confirmation=1");
        unlock(url);
        setInterval(function () {
            $('.waiter').html('&nbsp;' + String(tim % 60) + 's' + String(tim > 59 ? ' and ' + String(Math.floor(tim / 60)) + 'm' : ''));
            if (false) {   ///here
                $('.ntwkng').on('click', function () {
                    //window.location.href = '/redirect?s=adfocus&r=' + url;
                    console.log('/redirect?s=adfocus&r=' + url);
                });
                $('#ntwkngbtn').removeClass('yyyy');
                $('#unnlock2').removeClass('ui');
                $('#unnlocklock').addClass('ui');
            }
            tim++;
        }, 1000);
        fetch(`https://mixerno.space/api/youtube-channel-counter/user/UCmKdE4TgNlIJRoe0HLzvpJA`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            old = Number(data.counts[0].count);
            setInterval(function () {

                fetch(`https://mixerno.space/api/youtube-channel-counter/user/UCmKdE4TgNlIJRoe0HLzvpJA`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        now = Number(data.counts[0].count);
                        console.log(now);
                        if (old != now) {
                            if (old < now) {

                                console.log('MOREEE', now);
                                wnd.close();
                                unlock(url);
                                old = now;
                            }
                            if (old > now) {
                                old = now;
                                $('.stats').text('You have unsubbed. Now resub')
                            }
                            old = now;
                            console.log('CHANGEDDDD', old);
                        }
                    })
            }, 1000);
        })
    });
    


}
function unlock(url) {
    $('.stats').text('Success')
    $('.tick').removeClass("ddn");
    $('.loaddding').addClass("ui");
    $('.ore').removeClass("ddnb");
    gsap.to(".ore", {
        duration: 3.5,
        ease: "power1.in",
        motionPath: {
            path: "#mpath",
            align: "#mpath",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
    });
    $('#dwnbtn').on('click', function () {
        window.open(`/serve/index.html?w=${url}`);
        window.location.href = "../";
    });

    setTimeout(function () {
        $('#dwnbtn').removeClass("locked");
        $('#unnlock').removeClass("ddn");
        $('#lock').addClass("ddn");
    }, 3500);

}
$(document).ready(function () {
    clearInterval(bossbarinterval);
    
    $('.loading-c').removeClass("ui");
    $('.loading-c').css('opacity','0');
    gsap.to('.loading-c',{duration:0.5,opacity:1});
    bossbar();
});
var bossbarinterval;
function bossbar() {
    $('.loading').text('');
    $('.loading').append('<img src="progress1.png">');
    for (var i = 0; i < 100; i++) {

        $('.loading').append('<img class="ldnimg" src="progress2.png">');
    }
    $('.loading').append('<img src="progress1.png">');
    var k = 0;
    var o = 30;
    var fl = false;
    var j = 0;
    var h = 0;
    bossbarinterval=setInterval(function () {
        for (var i = 0; i < 100; i++) {
            if (i < k) {
                $($('.ldnimg')[i]).attr('src', 'progress2.png');
            } else if (i > k && i < k + o) {
                $($('.ldnimg')[i]).attr('src', 'progress3.png');

            } else {

                $($('.ldnimg')[i]).attr('src', 'progress2.png');
            }

            if (k + o > 100 && i > (k - 100) && i < (k + o - 100)) {

                $($('.ldnimg')[i]).attr('src', 'progress3.png');
            }
        }
        j++;/*
        if(h%2==0){
            o++;
        }else{
            o--;
        }
        h=Math.floor(j/75);*/
        k = j % 100;
        
    }, 10);

}