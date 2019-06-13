var a1 = " бизнеса";
for(i=0;i<a1.length;i++)
    show(a1.substr(i,1),i*150);
function show(l,d){
    setTimeout(function(){
        $('#slovo').append(l);
    },d);
}
for(i=0;i<a1.length;i++)
    delet(i*150+1600);
function delet(d){
    setTimeout(function(){
        a1 = a1.substring(0, a1.length - 1);
        $('#slovo').text(a1);
    },d);
}
let number = 1;
setInterval(function(){
    var a = [" бизнеса", " блогера", "магазина"];
    let t = a[number];
    for(i=0;i<t.length;i++)
        show(t.substr(i,1),i*150);
    function show(l,d){
        setTimeout(function(){
            $('#slovo').append(l);
        },d);
    }
    for(i=0;i<t.length;i++)
        delet(i*150+1600);
    function delet(d){
        setTimeout(function(){
            t = t.substring(0, t.length - 1);
            $('#slovo').text(t);
        },d);
    }
    if (number != 2) {
        number++;
    }
    else{
        number = 0;
    }
}, 3000)


    // setTimeout(function(){
    //     $('#slovo').slideUp(700);
    //     if(number != 3){
    //         number++;
    //     }
    //     else{
    //         number = 0;
    //     }
    // },t.length*200);
