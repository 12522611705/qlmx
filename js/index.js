/**
 * 初始化公用组件
 */
(function initCommon() {
    $.get('/components/nav.html', function(data) {
        var html = $(data)
        $('body').prepend(html)
    })
    $.get('/components/footer.html', function(data) {
        var html = $(data)
        $('body').append(html)
    })
}());
