// 滚动条到了浏览器的底部距离
function browserBottomDistance() {
    const {scrollTop: eleScrollTop, clientHeight: eleClientHig, scrollHeight: eleScrollHeight} = document.documentElement || {};
    const {scrollTop: boyScrollTop, clientHeight: bodyClientHig, scrollHeight: bodyScrollHeight} = document.body || {};
    // 滚动高度
    const scrollTop = window.pageYOffset || eleScrollTop || boyScrollTop || 0;
    // 可视高度
    const clientHeight = eleClientHig || bodyClientHig || 0;
    // 整个文档的真实的高度
    const scrollHeight = Math.max(
        (eleScrollHeight || 0),
        (bodyScrollHeight || 0)
    );
    console.log(scrollHeight, scrollTop, clientHeight);
    return scrollHeight - scrollTop - clientHeight;
}

console.log(browserBottomDistance());
