/**
* @desc 	公用的头部与底部
* @author 	wangyanhong
* @date 	2015-08-22
* @version 	v0.0.1
*/
$(function(){
	var NULLURL = 'javascript:;',
	data = {
		navTop: [{
			txt: '性能监控',
			url: '#monitor'
		},{
			txt: '常见问题',
			url: '#question'
		},{
			txt: '使用说明',
			url: '#explain'
		},{
			txt: '术语解释',
			url: '#term'
		},{
			txt: 'API文档',
			url: '#api'
		},{
			txt: '更新日志',
			url: '#log'
		},{
			txt: '在线反馈',
			url: '#online'
		}],
		monitor: [{//性能监控
			txt: '账户和套餐',
			child: [{
				txt: '账户aaa'
			},{
				txt: '监控宝API认证过程'
			}]
		},{
			txt: '网站监控'
		},{
			txt: '服务性能监控'
		},{
			txt: '服务器监控'
		},{
			txt: '个人设置'
		},{
			txt: '邮件v报告'
		}],
		// 常见问题
		question: [
		],
		// 使用说明
		explain: [{
			txt: '关于透视宝',
			child: [{
				txt: '透视宝平台简介'
			},{
				txt: '透视宝'
			}]
		},{
			txt: '网站监控'
		},{
			txt: '服务性能监控'
		},{
			txt: '服务器监控'
		},{
			txt: '告警和故障'
		},{
			txt: '报告报表'
		}],
		// 术语解释
		term: [{
			txt: '网站性能指标'
		},{
			txt: '服务器性能指标'
		},{
			txt: '服务性能指标'
		},{
			txt: 'API请求性能指标'
		},{
			txt: 'Docker监控'
		},{
			txt: '邮件报告'
		}],
		// 更新日志
		log: [{
			txt: '1.9'
		},{
			txt: '1.8'
		},{
			txt: '1.7'
		},{
			txt: '1.6'
		}],
		// api文档
		api: [{
			txt: '1.9'
		},{
			txt: '1.8'
		},{
			txt: '1.7'
		},{
			txt: '1.6'
		}],
		online: [{
			txt: '提交问题'
		},{
			txt: '反馈历史'
		}],
		source: [{
			txt: '云智慧资料',
			child: [{
				txt: '关于云智慧'
			},{
				txt: '行业报告'
			},{
				txt: '解决方案'
			},{
				txt: '白皮书'
			},{
				txt: '合作案例'
			}]
		},{
			txt: '网站监控'
		}]
	};
	var navTopHtml = template('model', {item: data.navTop}),
		curHash = document.location.hash.substring(1);
	$('.wrap','div.nav').html(navTopHtml);
	getCurPage();	
	if(curHash.indexOf('source')>-1){
		$('div.nav').hide();
	}else{
		$('div.nav').show();
	}
	// 如果有子集时打开子集
	$('div.sidebar').on('click', 'a', function(){
		var $this = $(this);
		if($this.hasClass('child')){
			var index = $this.index(),
				child = data[curHash][index].child||[],
				childItem = null,
				childHtml = [];
			for(var i=0,len=child.length; i<len; i++){
				childItem = child[i];
				childHtml.push('<li><a href="'+(childItem.url||'javascript:;')+'" alt="'+(childItem.txt||'')+'">'+(childItem.txt||'')+'</a></li>');
			}

			$this.parent().append('<ul>'+childHtml.join('')+'</ul>');
		}
	});

	function getCurPage(){
		var curHash = document.location.hash.substring(1),
			navSideHtml = template('model', {item: data[curHash]});
		$('div.sidebar').html(navSideHtml);
		// 右侧调用文档更换
		$('iframe').attr('src', curHash + '.html');
	}

	// 切换nav时左侧内容更换
	window.onhashchange = function(){
		getCurPage();
	};

});