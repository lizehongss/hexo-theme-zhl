hexo.on('generateBefore',function(){
	if(hexo.locals.get){
		var data =hexo.locals.get('data')
		data&&data.zhl&&(hexo.theme.config=data.zhl)
	}
})