$(document).ready(function() {
    var frm = $('form');
    frm.submit(function (ev) {
    ev.preventDefault();
    });
    
    
    var dcb = $('#dcb');
    var txt = $('#txt');
    var loader = $('#loader');
    var load = false;
    var panel = $('#panel');
    var vid = $('#vid');
    
    vid.hide();
    loader.hide();
    panel.hide();
    dcb.focus();
      
    
    $('#dcb').click(function() {

        alert('I told you not to click it');
        
        var blowup = false;
        var c = prompt('What is 4 + 9?');
        var d = false;
        var f = false;
        var g = false;
        
        if (c != "13"){
        
        alert('Horrible math');
        blowup = true;
        }
        if(c == '13'){
        d = prompt('Correct! \n What comes down but never comes up')
        }
        if(d.toLowerCase().indexOf('rain') < 0) {
            
            console.log(d.indexOf('rain'));
        alert('You are a bad carrot.');
        blowup = true;
        }
        if (d.toLowerCase().indexOf('rain') >= 0 && !blowup){
            console.log(d.indexOf('rain'));
            f = prompt('Correct! \n How do you spell Nitroglycerin?')
        }

        if(f == 'Nitroglycerin') {
            console.log(f);
        g = prompt('Correct! \n If I drink, I die. If i eat, I am fine. What am I?')
        }
        if(f !== 'Nitroglycerin' && !blowup){
        alert('Should have listened to your grandmother');
        blowup = true;
        }
        
     if(g.toLowerCase().indexOf('fire') >= 0)
     {
         console.log(g.toLowerCase().indexOf('fire'))
         $('body').addClass('blue')
        $('#dcb').hide();
        panel.show();
            txt.focus();
        
     }
    if(g.toLowerCase().indexOf('fire') < 0)
    {
        
         console.log(g.toLowerCase().search('fire'))
     alert("Wrong! Maybe you should ask a firefighter.");   
    }
    
});
    
        
        $('#submit').click(function() {
        if (txt.val().toLowerCase() == 'twelve') {
        alert('Yay, correct. Wait 10 seconds!');
        load = true;
            
        if (load)
        {
            panel.hide();
            loader.show();
            setTimeout(function () {
            loader.hide();
            
            }, 5000);
             setTimeout(function () {
            vid.show();
            vid.attr('src', 'https://www.youtube.com/embed/A0XXmVts1y0?autoplay=1');
            
            }, 5200);
        }
        }
        else
        {
            alert('Wrong.');
        }
        });

});