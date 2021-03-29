//osusearch download (osu server)
$(document).ready(function()  {
	var time = 3500;
	var time_0 = 0;
	var count = 0;
	var index = 0;
	var beatmap_limit = 350;
	document.querySelectorAll(".beatmap-icon-container a:nth-child(2)").forEach(osumap => {
		count+=1;	
		if (count <= beatmap_limit){				
			setTimeout( function(){				
			index+=1;
    		console.log('(', index, '/', count, ') downloading: ', $(osumap).attr('href'));
        	window.open($(osumap).attr('href')).focus();
        	if (index == beatmap_limit){console.log('finished downloading ヽ(￣д￣;)ノ=3=3=3');}        	  	
        	}, time_0);    	
		}
		time_0 += time;	
	});
});

//osu beatset extractor
$(document).ready(function()  {
	var count = 0;
	var pretty = [];
	document.querySelectorAll(".beatmap-icon-container a:nth-child(1)").forEach(osumap => {
		count+=1;						
		id = $(osumap).attr('href').replace( /^\D+/g, '').replace(/\/.*/, '');
		pretty.push(id);
	});	
	console.log(pretty.join(','));
	console.log('finished extracting (',count,') ヽ(￣д￣;)ノ=3=3=3');
});

//auto next
$(document).ready(function()  {
	var time = 1000;
	var time_0 = 0;
	var loops = 1000;
	for (i = 0; i < loops; i++) {
		setTimeout( function(){				
			document.querySelector("#beatmap-container > div.one.column.row.infinite-scroll > div > span > a:nth-child(3)").click();	
        }, time_0);		
	time_0 += time;	
	}	
});