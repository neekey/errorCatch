;(function(){

    window.onerror = function (em, url, ln) {
            alert(em + ", hhahahaha " + url + ", " + ln);
            console.log( printStackTrace().join('\n\n') );
            return false;
    };

    function btnClick(){
        var c = d;
    }

    var btn = document.getElementById( 'J_Btn3' );
    btn.onclick = btnClick;

    var btnEval = document.getElementById( 'J_Btn4' );
    btnEval.onclick = function(){
        eval('var e =f;');
    };

    var script = document.createElement( 'script');
    document.body.appendChild( script );
    script.innerHTML = ( '\n \n \n var z = x;' );

})();




