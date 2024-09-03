import '#template/js/'
import './custom-js/pages'

const screenWidth = document.body ? document.body.offsetWidth : window.screen.width

if (screenWidth < 992) {
    navigator.__defineGetter__('userAgent', function () {
        return "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36"
    });
}
