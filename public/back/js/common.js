/**
 * Created by Jepson on 2018/4/6.
 */
//ajax 全局事件

// .ajaxComplete()  当每个ajax 请求完成的时候，调用（不管成功还是失败）
// .ajaxError()     当AJAX 请求失败的时候调用
// .ajaxSend()      在每个AJAX 请求发送前 调用
// .ajaxStart()     在第一个AJAX 发送时  调用
// .ajaxStop()      在所有AJAX 请求完成时 调用
// .ajaxSuccess()    当AJAX 请求成功的时候调用

// 配置禁用小圆环
NProgress.configure({ showSpinner: false });

//// 开启进度条
//NProgress.start();
//
//setTimeout(function() {
//  // 关闭进度条
//  NProgress.done();
//}, 500)


// ajaxStart 所有的 ajax 开始调用
$(document).ajaxStart(function() {
  NProgress.start();
});


// ajaxStop 所有的 ajax 结束调用
$(document).ajaxStop(function() {
  // 模拟网络延迟
  setTimeout(function() {
    NProgress.done();
  }, 50000)
});


 