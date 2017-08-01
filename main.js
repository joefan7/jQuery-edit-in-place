$(document).ready(function () {
    $('#theName').on('click', function (event) {
        $('#theName').addClass('hidden')
        $('#theNameInput').removeClass('hidden')
        $('#theNameInput').trigger('focus')
        $('#theNameInput').val($('#theName').text())
    })

    $('#theNameInput').on('blur', function () {
        $('#theName').removeClass('hidden')
        $('#theNameInput').addClass('hidden')
        $('#theName').text($('#theNameInput').val())
    })

    $('#theProfile').on('click', function (event) {
        $('#theProfile').addClass('hidden')
        $('#theProfileTextArea').removeClass('hidden')
        $('#theProfileTextArea').trigger('focus')
        $('#theProfileTextArea').val($('#theProfile').text())
    })

    $('#theProfileTextArea').on('blur', function () {
        $('#theProfile').removeClass('hidden')
        $('#theProfileTextArea').addClass('hidden')
        $('#theProfile').text($('#theProfileTextArea').val())
    })
})

