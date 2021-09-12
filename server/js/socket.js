const socket = io('http://localhost:5000/')
socket.on('connect', function () {
    $('#message').append('Connected to server: ' + socket.id + '<br>')
    socket.emit('msg', 'I ma conected' + socket.id);

})

socket.on('msg', function (msg) {
    $('#message').append(msg + '<br>')
})

$(function () {
    $('input').keydown(function (key) {
        if (key.keyCode === 13) {
            socket.emit('msg', $(this).val())
            $(this).val('')
        }
    })

})

