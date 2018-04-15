var $header=document.getElementById("header");

function hasClass( elements,cName ){  
   return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );
    // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断  
};  

 window.onscroll=function(){  
	var t =document.documentElement.scrollTop||document.body.scrollTop;  
	console.log(t)
	cName="fixed"
 	if(t>0){
 		if(!hasClass($header,cName)){  
        	$header.className += " " + cName;  
    	};  
 	}
 	if(t<=0){
 		if(hasClass($header,cName)){  
        $header.className =$header.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " );
         // replace方法是替换  
    };  
 	}   
 };