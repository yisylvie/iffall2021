var links = [
    "http://www.coca-cola.com/",
    'http://www.apple.com/',
    'http://www.ibm.com/',
    'http://nerf.hasbro.com/en-us',
    'http://www.harley-davidson.com/',
    'http://www.michaelkors.com/',
    'http://www.ideo.org',
    'http://www.sardellastl.com/',
    'http://www.stlouis.craigslist.org/',
    'https://www.lyft.com/',
    'http://www.samsung.com/us/',
    'http://www.dimecitycycles.com/',
    'http://www.cartoonnetwork.com/',
    'http://www.bissingers.com/',
    'http://www.nbc.com/the-tonight-show',
    'http://www.nike.com/us/en_us/',
    'http://www.missouribotanicalgarden.org/',
    'http://www.hulkhogan.com/',
    'http://www.teslamotors.com/',
    'http://www.thecolorrun.com/',
    'http://www.moo.com/us/',
    'https://www.pottermore.com/',
    'http://www.fitbit.com/home',
    'http://www.explodingkittens.com/',
    'http://www.mollyjogger.com/',
    'https://www.stjude.org/',
    'http://www.newyorker.com/',
    'http://www.foreflight.com/',
    'http://www.npr.org/',
    'https://www.tuckerallen.com/',
    'https://www.velocity.com/',
    'https://www.hsn.com/',
    'https://www.instagram.com/',
    'https://www.facebook.com/',
    'http://www.electrabike.com/',
    'http://www.oldnavy.com/',
    'https://www.army.mil/'
]

var main = document.getElementsByTagName("main");

var butPref = "btn_"

//create all buttons
for(var i = 0; i < links.length; i++){
    var buttonContainer = document.getElementsByClassName('button_container')[0].cloneNode(true);
    
    //button
    var buttonArr = buttonContainer.getElementsByTagName("a");
    var button = buttonArr[0];

    //create id
    var period = links[i].indexOf(".");
    var idName = links[i].slice(period + 1);
    var period = idName.indexOf(".");
    var idName = idName.slice(0,period);
    button.id = butPref + idName;

    //name displayed
    button.innerHTML = idName;

    //add link
    button.href = links[i];

    console.log(buttonContainer.firstChild);
    main[0].appendChild(buttonContainer);
}

//coca-cola
var cocaCola = document.getElementById(butPref + "coca-cola");

cocaCola.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 615.08 192.94\"><defs><style>.cls-1{fill:#e61d2b;}</style></defs><title>Coca cola</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M430.88,14.81s-11.53,4.59-24.94,19.37S384.72,65.58,390.5,70c2.22,1.68,7.34,2,16.63-6.4a73.4,73.4,0,0,0,19.66-27.26c6-14.63,4.09-21.35,4.09-21.51M504.27,41.4c-14.9-7.64-25.79-17-37.12-22.79-10.81-5.55-17.8-7.87-26.54-6.7a27.08,27.08,0,0,0-3.6.9S441.51,28.18,423.6,54C405.46,80.18,389,80,384.32,72.81c-4.9-7.59,1.43-23.06,12-36.83,11.07-14.4,30.51-26.34,30.51-26.34s-6.2-3.79-21.42,4.84C390.56,22.86,365,42.86,341.28,76.59s-28.42,52.29-31.82,66.9-.31,30.26,15.89,30.26,35.06-24.71,40.38-33.3c9.89-16,16.34-40.54,2.88-37.17-6.63,1.66-12,9-15.39,16.07a68.75,68.75,0,0,0-4.88,14.2,56,56,0,0,0-13.13,7.64,97.09,97.09,0,0,0-12.46,11s.06-11.68,9.37-30.58,26.4-27.53,36.08-28.34c8.72-.7,20.07,6.7,10.45,34s-38,60.49-67.81,60.9c-27.51.38-45.51-34.73-7.22-96C346,24.48,395.71,3.71,411.85,1.4s21.39,4.81,21.39,4.81a69.43,69.43,0,0,1,30.69-5.06C483.64,2.48,498.88,16.43,519,26.23c-5.23,5-10.22,10.25-14.72,15.17m88.54-22.79c-13.66,8.76-32.56,16.7-50.72,15-4.6,4.75-9.52,10.25-14.45,16.25,31.49,6.23,59.08-13.28,73.75-29.89A97.91,97.91,0,0,0,615.08.3a122.82,122.82,0,0,1-22.27,18.31m-41.93,88.72a6.86,6.86,0,0,0,.58-1.31,3.18,3.18,0,0,0-2.89-2.76c-3-.14-7.09.43-17.82,12.31a161.54,161.54,0,0,0-22.81,32.36c-6.14,11.22-8.63,19.58-5.1,21.74a5.09,5.09,0,0,0,3.72.38c2.39-.57,5.1-2.81,9.22-7.58,1.93-2.24,4.07-5.41,6.63-8.92,7.1-9.66,24.94-40.07,28.47-46.22M439.42,120.25c1.79-4.68,4.07-13.87-.67-17.48-5.09-3.83-18.07,5.16-18.14,14.38-.09,9.44,9.14,13.71,11.35,14.31,1.26.34,1.7.29,2.31-.72a84.17,84.17,0,0,0,5.15-10.49m-9.82,17.17a39.24,39.24,0,0,1-8.92-5.69A28.6,28.6,0,0,1,414,123.6c-.18-.3-.36-.07-.56.2s-1,1-7.92,11.14-17.55,31.15-7.93,34.73c6.16,2.29,16.41-8.5,22-15.65a133.53,133.53,0,0,0,10.33-15.72c.29-.61,0-.75-.31-.88m109.12,24.27c-2.61,4.18-5.59,12.2,3,7.21,10.51-6.07,25.48-28.78,25.48-28.78H574a227.6,227.6,0,0,1-20.58,27c-10.65,11.8-23.64,22.52-32.79,21.46-10.69-1.25-7.34-15.28-7.34-15.28S498,189.58,487.42,188.41c-14.29-1.58-9.93-19.24-9.93-19.24S461.33,189,450.32,188.39c-17.26-1-12.92-22-8.12-36.79,2.57-7.91,4.95-14.12,4.95-14.12s-1.71.45-5.39,1c-1.92.27-5.42.47-5.42.47s-7.19,12.68-12.94,20.3-30.19,33.89-44.57,28.63c-13.3-4.86-8.9-25.22-1.16-41.4,11.3-23.59,43.08-57.48,61.41-53,19,4.61.43,39.28.43,39.28s0,.13.2.22c.38.14,1.37.25,3.66-.2a41.13,41.13,0,0,0,6.95-2.07s19.1-40,40.2-66.17S553.71-6.7,570.23,4.2c4,2.68,2.2,11.91-3.24,23.11a74.1,74.1,0,0,1-7.46,2c3.64-6.61,6.05-12.18,6.77-16.07,2.49-13.52-29.08,15-51.64,45.64a425.28,425.28,0,0,0-36.1,58.43A98.92,98.92,0,0,0,490.2,109a333.22,333.22,0,0,0,28.64-26.74,311.87,311.87,0,0,0,24.38-28.14,66.14,66.14,0,0,0,7.17-.74,308.92,308.92,0,0,1-26.9,31.78c-9,9.1-18.74,18.89-27.2,26a226.54,226.54,0,0,1-23.86,17.73s-19.73,39.79-9,42.34c6.31,1.52,18.77-17.67,18.77-17.67s16.26-24.81,26.06-36c13.37-15.2,24.88-24,36.38-24.16,6.7-.12,10.65,7,10.65,7l3.15-4.88h19.4s-36.23,61.48-39.13,66.11M592.81,18.61c-13.66,8.76-32.56,16.7-50.72,15-4.6,4.75-9.52,10.25-14.45,16.25,31.49,6.23,59.08-13.28,73.75-29.89A97.91,97.91,0,0,0,615.08.3a122.82,122.82,0,0,1-22.27,18.31M320.36,48.77H301.91L291.48,65.62l18.45,0ZM233,107.12c7.85-10.76,29.51-48.47,29.51-48.47a3.17,3.17,0,0,0-2.88-2.76c-3-.14-8,.87-17.93,13.3s-17.64,22.32-23.26,32.61c-6.16,11.23-8.85,19.15-5.31,21.3a5.26,5.26,0,0,0,3.71.38c2.3-.58,5.31-2.89,9.44-7.64,1.94-2.22,4.14-5.21,6.72-8.72m-99-51c-5.1-3.85-18.07,5.16-18.14,14.36-.08,9.45,11.67,12.34,13.19,12.41a2.31,2.31,0,0,0,1.29-.27,1.54,1.54,0,0,0,.62-.68,89.27,89.27,0,0,0,3.72-8.34c1.79-4.68,4.06-13.87-.68-17.48m-7.69,32.53a43,43,0,0,1-10-4.6,20.82,20.82,0,0,1-7.14-7.91c-.18-.3-.38-.07-.56.2s-1.22,1.57-8.16,11.75-17.22,31-7.59,34.58C99,125,109.37,114.12,115,107a185.55,185.55,0,0,0,11.66-17.46c.23-.61,0-.75-.34-.86M277,94.92h6.76s-33.87,49-53,46.72c-10.68-1.25-7.51-14.43-7.51-14.43s-15,17.56-28.78,14c-12.5-3.21-4.43-24-4.43-24-1.42.57-28.47,31.06-47.48,23.75-19.89-7.68-9.56-33.21-5.78-40.89,3.21-6.47,6.76-12.77,6.76-12.77s-3.05.86-5,1.3-4.77,1-4.77,1-9.41,15.29-15.16,22.92-30.19,33.85-44.59,28.63-10.83-25.37-2.74-41.37c13.12-25.95,44.25-57.84,63-53,18.94,4.83,3.26,35.55,3.26,35.55s3.77.49,12.8-5.67c13-8.87,30.16-32.73,48.74-29.93C207.84,48.05,216,57,204.84,74c-3.56,5.46-9.53,10.34-14.1,5.51-2.85-3-.36-8.47,2.63-12.21a11.7,11.7,0,0,1,10-4.58s3.07-7-4.74-6.9c-6.32.12-22.32,14.85-31.35,29.73-8.28,13.66-20.83,36.93-8.23,42,11.55,4.66,33.53-21.43,43.71-35.1S236.14,47.8,255.6,46.56c6.7-.44,10.69,5.67,10.69,5.67l2.25-3.56H288s-36.65,61.16-39.51,65.79c-2.25,3.62-5.24,11.76,3,7.2S277,94.92,277,94.92m-10.59,98a80.59,80.59,0,0,0-48.9-14.27,30,30,0,0,0-23.86,12.93c-7.42-12.95-22.09-20.9-44.77-20.72-36.65.42-73,17.32-101.8,17.3C19.48,188.16-.65,170.81,0,140,1.21,85.93,46.9,37.24,81,15.33,100.66,2.74,117.1-1,127.85.21c7.84.87,17.27,9.93,11.32,23.28C130.43,43,118.36,41.4,118.81,32.07c.25-6.07,4.29-9.89,7.33-12,1.93-1.33,5.34-1.71,7.12-1.75,1.73-1.46,3-12.14-11-8.63S91.26,27,75.12,44.83,33.85,96.36,27.64,131.75c-2.9,16.41-1,46.34,37.91,46,33-.27,81.64-22,126.34-21.55,17.35.17,32.45,4.85,44.22,12.11,11.56,7.12,25.42,17.52,30.34,24.62\"/></g></g></svg>";

//apple
var apple = document.getElementById(butPref + "apple");

apple.innerHTML = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" 	 viewBox=\"0 0 857.5 1000\" style=\"enable-background:new 0 0 857.5 1000;\" xml:space=\"preserve\"> <style type=\"text/css\"> 	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#61BB46;stroke:#61BB46;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FDB827;} 	.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#F5821F;stroke:#F5821F;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#E03A3E;stroke:#E03A3E;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#963D97;stroke:#963D97;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st5{fill-rule:evenodd;clip-rule:evenodd;fill:#009DDC;stroke:#009DDC;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st6{clip-path:url(#apple6_1_);} 	.st7{clip-path:url(#apple5_1_);} 	.st8{clip-path:url(#apple4_1_);} 	.st9{clip-path:url(#apple3_1_);} 	.st10{clip-path:url(#apple2_1_);} 	.st11{clip-path:url(#apple1_1_);} </style> <g id=\"rainbow\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\" sodipodi:docname=\"Apple_Computer_Logo_rainbow.svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:svg=\"http://www.w3.org/2000/svg\"> 	<path id=\"path5\" inkscape:connector-curvature=\"0\" class=\"st0\" d=\"M46.5,362.7c0.3-0.5,0.6-1,0.9-1.5 		c51.2-79.2,132-125.6,208-125.6c77.4,0,126,42.6,190,42.6c62.1,0,99.9-42.7,189.3-42.7c67.6,0,139.2,37,190.3,100.9 		c-14.1,7.8-26.8,16.6-38.2,26.3L46.5,362.7L46.5,362.7L46.5,362.7z\"/> 	<path id=\"path7\" inkscape:connector-curvature=\"0\" class=\"st0\" d=\"M566.9,164.3c32.5-41.9,57.2-101,48.2-161.5 		C562,6.5,499.9,40.5,463.6,84.6c-32.9,40.1-60.1,99.7-49.5,157.5C472.1,243.9,532.1,209.2,566.9,164.3L566.9,164.3z\"/> 	<path id=\"path9\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccc\" class=\"st1\" d=\"M43.9,361.6 		C21.8,396.3,6.5,446,2.5,489.7l715.7,0c7.7-47.7,33.5-93.3,74.2-128L43.9,361.6L43.9,361.6L43.9,361.6z\"/> 	<path id=\"path11\" inkscape:connector-curvature=\"0\" class=\"st2\" d=\"M9,616.6C2,572,0.9,529.1,5.3,489.7l710.1,0 		c-6.9,42.7-1.1,87.2,16.5,127L9,616.6L9,616.6L9,616.6z\"/> 	<path id=\"path13\" inkscape:connector-curvature=\"0\" class=\"st3\" d=\"M43.7,743.5C26.9,700.9,15.4,658,9,616.6l722.8,0 		c22.4,50.7,63.8,93.7,122.1,115.8c-1.7,3.9-3.4,7.6-5,11.1L43.7,743.5L43.7,743.5L43.7,743.5z\"/> 	<path id=\"path15\" inkscape:connector-curvature=\"0\" class=\"st4\" d=\"M848.9,743.6c-20,44.2-31.6,67.1-59.3,109.5 		c-3.7,5.7-7.6,11.5-11.6,17.4l-667.2,0.1c-2.1-3.2-4.3-6.4-6.3-9.6c-24.9-38.2-45.1-77.7-60.7-117.4L848.9,743.6L848.9,743.6 		L848.9,743.6z\"/> 	<path id=\"path19\" inkscape:connector-curvature=\"0\" class=\"st5\" d=\"M778,870.4c-40.8,60-95.6,126.1-162.1,126.7 		c-64.9,0.6-81.5-42.4-169.5-41.9c-88,0.5-106.4,42.7-171.3,42.1c-69.4-0.6-123.2-65.5-164.3-126.8L778,870.4L778,870.4L778,870.4z\" </g> </svg> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" 	 viewBox=\"0 0 857.5 1000\" style=\"enable-background:new 0 0 857.5 1000;\" xml:space=\"preserve\"> <style type=\"text/css\"> 	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#61BB46;stroke:#61BB46;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FDB827;} 	.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#F5821F;stroke:#F5821F;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#E03A3E;stroke:#E03A3E;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#963D97;stroke:#963D97;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st5{fill-rule:evenodd;clip-rule:evenodd;fill:#009DDC;stroke:#009DDC;stroke-width:5.386;stroke-miterlimit:2.2408;} 	.st6{clip-path:url(#apple6_1_);} 	.st7{clip-path:url(#apple5_1_);} 	.st8{clip-path:url(#apple4_1_);} 	.st9{clip-path:url(#apple3_1_);} 	.st10{clip-path:url(#apple2_1_);} 	.st11{clip-path:url(#apple1_1_);} </style> <g id=\"black\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\" sodipodi:docname=\"Apple_Computer_Logo_rainbow.svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:svg=\"http://www.w3.org/2000/svg\"> 	<g id=\"clip_5_\"> 		<defs> 			<path id=\"apple6\" d=\"M829.1,337.3l-2.8,1.6c-12.2,6.7-23.7,14.4-34.1,22.9c0.1-0.1,0.2-0.1,0.2-0.2h-4.2l-740.9,0h-3.2l0.1-0.2 				c0.3-0.5,0.7-1,1-1.5C95.8,281.6,176.3,233,255.5,233c41,0,73.6,11.7,105.2,23c28.2,10.1,54.8,19.6,84.8,19.6 				c27.7,0,51-8.9,75.7-18.2C551.3,246,585.4,233,634.7,233c69.5,0,141.4,38.1,192.4,101.9L829.1,337.3z M617.8,2.5L617.4,0 				l-2.5,0.2c-53.3,3.7-116.4,37.7-153.3,82.8c-40.6,49.5-59.3,109.2-50.1,159.7l0.4,2.1l2.2,0.1c1.5,0,2.9,0.1,4.4,0.1 				c26.7,0,55-7.5,82-21.8c13.2-7,26-15.6,37.6-25.3c11.6-9.7,22.1-20.5,31-31.9C607.9,115.8,625.7,56.2,617.8,2.5z\"/> 		</defs> 		<clipPath id=\"apple6_1_\"> 			<use xlink:href=\"#apple6\"  style=\"overflow:visible;\"/> 		</clipPath> 		<rect id=\"rectangle_5_\" x=\"-77.5\" y=\"-50.6\" class=\"st6\" width=\"1012.6\" height=\"440.9\"/> 	</g> 	<g id=\"clip_4_\"> 		<defs> 			<path id=\"apple5\" d=\"M792.4,361.6c-0.1,0.1-0.2,0.1-0.2,0.2c-40.6,34.6-66.3,80.2-74,127.8h-0.1l-712.8,0H2.5 				c4-43.6,19.3-93.4,41.4-128.1h3.4l740.9,0H792.4z\"/> 		</defs> 		<clipPath id=\"apple5_1_\"> 			<use xlink:href=\"#apple5\"  style=\"overflow:visible;\"/> 		</clipPath> 		<rect id=\"rectangle_4_\" x=\"-77.5\" y=\"157.7\" class=\"st7\" width=\"1012.6\" height=\"440.9\"/> 	</g> 	<g id=\"clip_3_\"> 		<defs> 			<path id=\"apple4\" d=\"M735.9,619.3l-729.3,0L6.3,617c-6.9-44.4-8.2-87.4-3.7-127.6l0.3-2.4l715.7,0l-0.5,3.1 				c-6.9,42.4-1.3,85.8,16.3,125.5L735.9,619.3z\"/> 		</defs> 		<clipPath id=\"apple4_1_\"> 			<use xlink:href=\"#apple4\"  style=\"overflow:visible;\"/> 		</clipPath> 		<rect id=\"rectangle_3_\" x=\"-77.5\" y=\"-19.2\" class=\"st8\" width=\"1012.6\" height=\"1038.4\"/> 	</g> 	<g id=\"clip_2_\"> 		<defs> 			<path id=\"apple3\" d=\"M857.5,730.9l-1.2,2.6c-1.5,3.2-2.8,6.4-4.2,9.4l-1.5,3.4h-1.7l-807,0l-0.7-1.7C24.7,702.6,13,659.7,6.3,617 				l-0.5-3.1l727.7,0l0.7,1.6c23.5,53.2,66.3,93.8,120.6,114.4L857.5,730.9z\"/> 		</defs> 		<clipPath id=\"apple3_1_\"> 			<use xlink:href=\"#apple3\"  style=\"overflow:visible;\"/> 		</clipPath> 		<rect id=\"rectangle_2_\" x=\"-77.5\" y=\"-19.2\" class=\"st9\" width=\"1012.6\" height=\"1038.4\"/> 	</g> 	<g id=\"clip_1_\"> 		<defs> 			<path id=\"apple2\" d=\"M853.1,740.9l-1.7,3.8c-20.8,46-32.4,68.3-59.5,109.9c-3.1,4.7-7.2,11-11.6,17.4l-0.8,1.2H778l-668.6,0.1 				l-0.8-1.2c-2.1-3.2-4.3-6.4-6.3-9.6c-24.4-37.3-44.9-77-61-117.9l-1.5-3.7h4L853.1,740.9z\"/> 		</defs> 		<clipPath id=\"apple2_1_\"> 			<use xlink:href=\"#apple2\"  style=\"overflow:visible;\"/> 		</clipPath> 		<rect id=\"rectangle_1_\" x=\"-77.5\" y=\"-19.2\" class=\"st10\" width=\"1012.6\" height=\"1038.4\"/> 	</g> 	<g id=\"clip\"> 		<defs> 			<path id=\"apple1\" d=\"M783.1,867.7l-2.9,4.2c-26.1,38.4-48.9,65.8-71.9,86.1c-30.9,27.4-62,41.5-92.4,41.8c-0.5,0-0.9,0-1.4,0 				c-29.9,0-49.7-9.1-70.8-18.8c-24.7-11.4-50.2-23.1-96-23.1h-1.5c-46.4,0.3-72.6,12-98,23.3c-21.5,9.6-41.8,18.7-71.9,18.7 				c-0.5,0-0.9,0-1.4,0c-72-0.7-126.8-68.8-166.5-128l-2.8-4.2h5.1L783.1,867.7z\"/> 		</defs> 		<clipPath id=\"apple1_1_\"> 			<use xlink:href=\"#apple1\"  style=\"overflow:visible;\"/> 		</clipPath> 		<rect id=\"rectangle\" x=\"-77.5\" y=\"-19.2\" class=\"st11\" width=\"1012.6\" height=\"1038.4\"/> 	</g> </g> </svg>";

//ibm

var ibm = document.getElementById(butPref + "ibm");

ibm.innerHTML = "<img src=\"images/IBM_logo.svg\" alt=\"ibm logo\">";

//hasbro

var hasbro = document.getElementById(butPref + "hasbro");

hasbro.innerHTML = "<img src=\"images/woosh.svg\" alt=\"nerf logo\" id=\"woosh\"> <img src=\"images/Nerf_logo.svg\" alt=\"nerf logo\" id=\"nerfLogo\">";

//michael kors

var michaelkors = document.getElementById(butPref + "michaelkors");

michaelkors.innerHTML = "<svg version=\"1.1\" 	 id=\"svg4304\" inkscape:version=\"0.91 r13725\" sodipodi:docname=\"michael kors.svg\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:svg=\"http://www.w3.org/2000/svg\" 	 xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 398 398\" 	 style=\"enable-background:new 0 0 398 398;\" xml:space=\"preserve\"> <style type=\"text/css\"> 	.st0{fill:#231F20;} </style> <path id=\"path4334\" inkscape:connector-curvature=\"0\" class=\"st0\" d=\"M199,359.8c-58.7,0-110.2-31.7-138.3-78.8h31.9l0.7-81.8 	l35.4,81.8h34.8l35.5-81.8V281h38.1l1.4-55.9l12.3-10.2l53.8,66.1h32.7C309.2,328.2,257.7,359.8,199,359.8 M57.2,123.2v151.5 	c-12.1-22.6-19-48.4-19-75.8C38.2,171.6,45.1,145.8,57.2,123.2 M199,38.2c58.9,0,110.5,31.8,138.5,79.2h-39.1l-59.3,55.2v-55.2 	h-50.4L147.1,219l-39.5-101.5H60.5C88.5,70,140.1,38.2,199,38.2 M359.8,199c0,25.5-6,49.7-16.6,71.2l-62.5-80.5l61.9-63 	C353.6,148.4,359.8,173,359.8,199 M199,0C89.1,0,0,89.1,0,199s89.1,199,199,199s199-89.1,199-199S308.9,0,199,0\"/> </svg>";