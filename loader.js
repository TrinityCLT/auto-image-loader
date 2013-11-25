function doPoll(){
    $.post('', function(data) {
        $("#maincontent").prepend('<img src="">');  // process results here
        setTimeout(doPoll,5000);
    });
}