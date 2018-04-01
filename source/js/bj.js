var ctx =document.getElementById('canvas'),
	content=ctx.getContext('2d'),WIDTH,HEIGHT,
	initRoundPopulation =80,round=[];
	WIDTH=document.documentElement.clientWidth;
	HEIGHT=document.documentElement.clientHeight;
	
	ctx.width=WIDTH;
	ctx.height=HEIGHT;
	function Round_item(index,x,y){
		//构造函数
		this.index=index;
		this.x=x;
		this.y=y;
		this.r=Math.random()*2+1;
		var alpha=(Math.floor(Math.random()*10)+1)/10/2;
		/*Math.random返回>=0<1的随机数。10个总数，从1开始*/
		this.color = "rgba(0,0,0,"+alpha+")";
	};
		Round_item.prototype.draw = function(){
			content.fillStyle=this.color;
			content.shadowBlur=this.r*2;
			content.beginPath();
			content.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			content.closePath();
			content.fill();
		};
		Round_item.prototype.move = function(){
			this.y-=0.15;
			if(this.y<=-10){
				this.y=HEIGHT+10;
			}
			this.draw();
					};
		function animate(){
			content.clearRect(0,0,WIDTH,HEIGHT);
			for(var i in round){
				round[i].move();
			}
			requestAnimationFrame(animate);
		}
		function init(){
			for(var i=0;i<initRoundPopulation;i++){
				round[i]= new Round_item(i,Math.random()*WIDTH,Math.random()*HEIGHT);
				round[i].draw();
			}
			animate();
		}
		init();
