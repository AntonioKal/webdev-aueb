$(document).ready(function(){
    hideAllDefault();
    showAllText();
    hideAllText();
})

function hideAllDefault(){
    $('.libSystem-text').hide();
    $('.cataloguing-text').hide();
    $('.classification-text').hide();
    $('.digitalization-text').hide();

}

function showAllText(){
    $('#libSystem').mouseover(function(){
        $('.libSystem-text').show();
        $('#libSystem').css('box-shadow', '2px 2px 10px black')
        $('#libSystem').css('cursor', 'pointer')

    })

    $('#cataloguing').mouseover(function(){
        $('.cataloguing-text').show();
        $('#cataloguing').css('box-shadow', '2px 2px 10px black')
        $('#cataloguing').css('cursor', 'pointer')
    })

    $('#classification').mouseover(function(){
        $('.classification-text').show();
        $('#classification').css('box-shadow', '2px 2px 10px black')
        $('#classification').css('cursor', 'pointer')
    })

    $('#digitalization').mouseover(function(){
        $('.digitalization-text').show();
        $('#digitalization').css('box-shadow', '2px 2px 10px black')
        $('#digitalization').css('cursor', 'pointer')
    })
}


function hideAllText(){
    $('#libSystem').mouseout(function(){
        $('.libSystem-text').hide();
        $('#libSystem').css('box-shadow', 'none')
    })

    $('#cataloguing').mouseout(function(){
        $('.cataloguing-text').hide();
        $('#cataloguing').css('box-shadow', 'none')
    })

    $('#classification').mouseout(function(){
        $('.classification-text').hide();
        $('#classification').css('box-shadow', 'none')
    })

    $('#digitalization').mouseout(function(){
        $('.digitalization-text').hide();
        $('#digitalization').css('box-shadow', 'none')
    })
}

