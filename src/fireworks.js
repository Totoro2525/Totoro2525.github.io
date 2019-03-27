"use strict";function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left,pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,n=anime.random(50,180),a=[-1,1][anime.random(0,1)]*n;return{x:e.x+a*Math.cos(t),y:e.y+a*Math.sin(t)}}function createParticule(e,t){var n={};return n.x=e,n.y=t,n.color=colors[anime.random(0,colors.length-1)],n.radius=anime.random(16,32),n.endPos=setParticuleDirection(n),n.draw=function(){ctx.beginPath(),ctx.arc(n.x,n.y,n.radius,0,2*Math.PI,!0),ctx.fillStyle=n.color,ctx.fill()},n}function createCircle(e,t){var n={};return n.x=e,n.y=t,n.color="#F00",n.radius=.1,n.alpha=.5,n.lineWidth=6,n.draw=function(){ctx.globalAlpha=n.alpha,ctx.beginPath(),ctx.arc(n.x,n.y,n.radius,0,2*Math.PI,!0),ctx.lineWidth=n.lineWidth,ctx.strokeStyle=n.color,ctx.stroke(),ctx.globalAlpha=1},n}function renderParticule(e){for(var t=0;t<e.animatables.length;t++)e.animatables[t].target.draw()}function animateParticules(e,t){for(var n=createCircle(e,t),a=[],i=0;i<numberOfParticules;i++)a.push(createParticule(e,t));anime.timeline().add({targets:a,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:n,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}function debounce(n,a){var i;return function(){var e=this,t=arguments;clearTimeout(i),i=setTimeout(function(){n.apply(e,t)},a)}}var canvasEl;if(canvasEl=document.querySelector(".fireworks")){var ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],setCanvasSize=debounce(function(){canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+"px",canvasEl.style.height=window.innerHeight+"px",canvasEl.getContext("2d").scale(2,2)},500),render=anime({duration:1/0,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){"sidebar"!==e.target.id&&"toggle-sidebar"!==e.target.id&&"A"!==e.target.nodeName&&"IMG"!==e.target.nodeName&&(render.play(),updateCoords(e),animateParticules(pointerX,pointerY))},!1),setCanvasSize(),window.addEventListener("resize",setCanvasSize,!1)}function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left,pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,n=anime.random(50,180),a=[-1,1][anime.random(0,1)]*n;return{x:e.x+a*Math.cos(t),y:e.y+a*Math.sin(t)}}function createParticule(e,t){var n={};return n.x=e,n.y=t,n.color=colors[anime.random(0,colors.length-1)],n.radius=anime.random(16,32),n.endPos=setParticuleDirection(n),n.draw=function(){ctx.beginPath(),ctx.arc(n.x,n.y,n.radius,0,2*Math.PI,!0),ctx.fillStyle=n.color,ctx.fill()},n}function createCircle(e,t){var n={};return n.x=e,n.y=t,n.color="#F00",n.radius=.1,n.alpha=.5,n.lineWidth=6,n.draw=function(){ctx.globalAlpha=n.alpha,ctx.beginPath(),ctx.arc(n.x,n.y,n.radius,0,2*Math.PI,!0),ctx.lineWidth=n.lineWidth,ctx.strokeStyle=n.color,ctx.stroke(),ctx.globalAlpha=1},n}function renderParticule(e){for(var t=0;t<e.animatables.length;t++)e.animatables[t].target.draw()}function animateParticules(e,t){for(var n=createCircle(e,t),a=[],i=0;i<numberOfParticules;i++)a.push(createParticule(e,t));anime.timeline().add({targets:a,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:n,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}function debounce(n,a){var i;return function(){var e=this,t=arguments;clearTimeout(i),i=setTimeout(function(){n.apply(e,t)},a)}}if(canvasEl=document.querySelector(".fireworks")){ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],setCanvasSize=debounce(function(){canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+"px",canvasEl.style.height=window.innerHeight+"px",canvasEl.getContext("2d").scale(2,2)},500),render=anime({duration:1/0,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){"sidebar"!==e.target.id&&"toggle-sidebar"!==e.target.id&&"A"!==e.target.nodeName&&"IMG"!==e.target.nodeName&&(render.play(),updateCoords(e),animateParticules(pointerX,pointerY))},!1),setCanvasSize(),window.addEventListener("resize",setCanvasSize,!1)}