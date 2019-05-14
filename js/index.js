/**
 * 初始化公用组件
 */
(function initCommon() {
    $.get('/components/nav.html', function(data) {
        var html = $(data)
        $('body').prepend(html)
        $(".main-slide").slide({effect:"left",trigger:"click",autoPlay:true});
    })
    $.get('/components/footer.html', function(data) {
        var html = $(data)
        $('body').append(html)
    })
}());
