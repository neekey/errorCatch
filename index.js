;(function(){

    function indent(text){

        var lines = text.split( '\n' );
        var intentedLine = [];
        var no;
        var line;
        for( no = 0; line = lines[ no ]; no++ ){
            intentedLine.push( '\t' + line );
        }

        return intentedLine.join( '\n' );
    }


    /*
    TraceKit.report.subscribe(function(stackInfo){
//        console.log( stackInfo );

        console.log( 'type: ', stackInfo.mode, ' msg: ', stackInfo.message );

        var stack = stackInfo.stack;
        var line;
        var index;

        if (!stack || stack.length === 0) return;

        if (stack[0].context){
            console.log(indent(stack[0].context.join('\n')));
        }

        for ( index = 0; index < stack.length; index++){
            line = stack[ index ];

            console.log('    at ' + line.func + ' (' + [line.url, line.line, line.column].join(':') + ')');
        }
    });
    */

    window.onerror = function( msg, url, no ){
        alert( msg + ', ' + url + ':' + no );
    }
})();




