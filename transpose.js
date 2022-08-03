/*
jQuery(document).ready(function(){
	jQuery("#lirik").click(function()
	{
	jQuery("pre a").toggleClass("putih");
	});
  });
*/
 var match,kuncigitar=["C","C#","D","D#","E","F","F#","G","G#","A","Bb","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],
      kuncigitarRegex=/A#|C#|D#|F#|G#|Ab|Bb|Db|Eb|Gb|A|B|C|D|E|F|G/g;
 
 $("#transposeplus").click(function(){$(".showTip").each(function(){for(
 var e=$(this).html(),i="",a=e.split(kuncigitarRegex),c=0;match=kuncigitarRegex.exec(e);)
  {
 var r=kuncigitar.indexOf(match[0]);
 	   i+=a[c++]+kuncigitar[r+1]
 }
 i=(i=(i=(i=(i=(i+=a[c]).replace(/Gb/g,"F#")).replace(/Ab/g,"G#")).replace(/Bb/g,"A#")).replace(/Db/g,"C#")).replace(/Eb/g,"D#"),
    $(this).html(i).removeClass("showTip "+e).addClass("showTip "+i)
	})
  }), $("#transposeminus").click(function(){$(".showTip").each(function()
    { 
	for( var e=$(this).html(),i="",a=e.split(kuncigitarRegex),c=0;match=kuncigitarRegex.exec(e);)
    {
 var r=kuncigitar.indexOf(match[0],1);i+=a[c++]+kuncigitar[r-1]}
       i=(i=(i=(i=(i=(i+=a[c]).replace(/Gb/g,"F#")).replace(/Ab/g,"G#")).replace(/Bb/g,"A#")).replace(/Db/g,"C#")).replace(/Eb/g,"D#"),
    $(this).html(i).removeClass("showTip "+e).addClass("showTip "+i)
	})
});

eval(function(p,a,c,k,e,d){
	e=function(c){
		return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))}
		;if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];
		e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])
	}}return p}
	('1 a=[\'1m\',\'y\',\'.x\',\'1n\',\'1o\\1l\',\'R\',\'x\\1k\',\'1g\',\'t\',\'#P\',\'1f\',\'1i\',\'#1q\',\'#1r\',\'2\',\'1z\',\'K\',\'Z\',\'w\',\'v\',\'1d\',\'11\',\'1u\',\'16\',\'15\',\'14\',\'12\',\'13\',\'#17\'];(0(b,e){1 f=0(g){18(--g){b[\'1c\'](b[\'1b\']())}};f(++e)}(a,1a));1 b=0(c,d){c=c-3;1 e=a[c];19 e};s(q)[b(\'X\')](0(){s(b(\'U\'))[b(\'z\')](0(){s(b(\'O\'))[b(\'S\')](b(\'V\'))})});1 7,4=[\'C\',\'C#\',\'D\',\'D#\',\'E\',\'F\',\'F#\',\'G\',\'G#\',\'A\',\'8\',\'B\',\'C\',\'C#\',\'D\',\'D#\',\'E\',\'F\',\'F#\',\'G\',\'G#\',\'A\',\'A#\',\'B\'],5=/A#|C#|D#|F#|G#|o|8|p|r|n|A|B|C|D|E|F|G/g;$(b(\'10\'))[\'w\'](0(){$(b(\'u\'))[b(\'I\')](0(){H(1 d=$(m)[b(\'9\')](),f=\'\',g=d[b(\'3\')](5),h=3;7=5[b(\'J\')](d);){1 j=4[\'v\'](7[3]);f+=g[h++]+4[j+l]}f=(f=(f=(f=(f=(f+=g[h])[b(\'6\')](/n/g,\'F#\'))[\'2\'](/o/g,\'G#\'))[b(\'6\')](/8/g,\'A#\'))[b(\'6\')](/p/g,\'C#\'))[\'2\'](/r/g,\'D#\'),$(m)[b(\'9\')](f)[\'y\'](b(\'i\')+d)[b(\'1C\')](b(\'i\')+f)})}),$(\'#1v\')[b(\'z\')](0(){$(b(\'u\'))[b(\'I\')](0(){H(1 d=$(m)[b(\'9\')](),f=\'\',g=d[\'K\'](5),h=3;7=5[b(\'J\')](d);){1 j=4[b(\'1B\')](7[3],l);f+=g[h++]+4[j-l]}f=(f=(f=(f=(f=(f+=g[h])[\'2\'](/n/g,\'F#\'))[b(\'6\')](/o/g,\'G#\'))[\'2\'](/8/g,\'A#\'))[b(\'6\')](/p/g,\'C#\'))[\'2\'](/r/g,\'D#\'),$(m)[b(\'9\')](f)[b(\'W\')](b(\'i\')+d)[\'R\'](b(\'i\')+f)})});1 P;1 Q=b(\'1h\');1j[b(\'N\')](b(\'1A\'),L,![]);0 L(){k=q[b(\'1s\')](b(\'1t\'));k[b(\'1e\')]=Q;k[b(\'N\')](b(\'T\'),M,![]);k[b(\'Y\')]()}0 M(c){q[b(\'l\')](b(\'O\'))[b(\'1w\')](0(d){d[b(\'1p\')][b(\'1y\')]=c[\'1x\'][\'t\']})}',62,101,'function|var|replace|0x0|kuncigitar|kuncigitarRegex|0x1b|match|Bb|0x7|||||||||0x13||gantilink|0x1|this|Gb|Ab|Db|document|Eb|jQuery|value|0xf|indexOf|click|showTip|removeClass|0x2||||||||for|0x8|0x9|split|startup|updateAll|0xa|0x11|warnachord|defaultColor|addClass|0x6|0x4|0x19|0x10|0xe|0x14|0x18|querySelectorAll|0xc|color|addEventListener|forEach|exec|each|html|transposeplus|while|return|0x189|shift|push|change|0x15|querySelector|ready|0x1a|select|window|x20|x20a|load|putih|pre|0x1c|lirik|fc8080|0x17|0x16|toggleClass|transposeminus|0xb|target|0x5|style|0xd|0x3|0x12'.split('|'),0,{}))
	