stenium_url=encodeURIComponent(stenium_url); 
stenium_url=stenium_url.replace(/'/g,'\\\''); 
stenium_title=encodeURIComponent(stenium_title); 
stenium_title=stenium_title.replace(/'/g,'\\\''); 
stenium_pub = 'mrbambastik';
stenium_pub    = encodeURIComponent(stenium_pub);
stenium_style = encodeURIComponent(stenium_style);
stenium_widgets = encodeURIComponent(stenium_widgets);
stenium_layout = encodeURIComponent(stenium_layout);


(function(){
	document.writeln("<script src=\"http://www.stenium.com/phplib/widget_loader.php?url="+stenium_url+"&title="+stenium_title+"&style="+stenium_style+"&widgets="+stenium_widgets+"&layout="+stenium_layout+" type=\"text/javascript\"></script>");
})()

