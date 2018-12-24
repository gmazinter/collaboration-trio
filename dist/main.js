$('#colors').children().each(function () {
    $(this).addClass('picker')
    $(this).css('background-color', $(this).data().color)
    $(this).on('click', function () {
        $('.box').css('background-color', $(this).data().color)
    })
})