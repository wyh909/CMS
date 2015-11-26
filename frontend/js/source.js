/**
* @desc 	资源引用模板数据
* @author 	wangyanhong
* @date 	2015-08-22
* @version 	v0.0.1
*/
$(function(){
	var data = [{
		title: '最新资源',
		item: [0,1,2,3,4]
	},{
		title: '最新资源',
		item: [0,1,2,3,4]
	}]
	var html = template('model', {model: data});
	$('body.source').append(html);

});