(function(a){
// tmp backend logging to profile usage
var __backendLog=function(message){
  jQuery.ajax({
    url:'/email/draft/temporaryLogging',
    type:'GET',
    data: {
      message:('{piPolyfill} ' + '[location: ' + window.location.href + '] ' + message)
    }
  });
};
if(!String.prototype.trim){String.prototype.trim=function(){__backendLog('String.trim');return this.replace(/^\s+|\s+$/g,"")}}if(!Array.prototype.forEach){Array.prototype.forEach=function(h,c){__backendLog('Array.forEach');var e,d;if(this==null){throw new TypeError("this is null or not defined")}var g=Object(this);var b=g.length>>>0;if({}.toString.call(h)!="[object Function]"){throw new TypeError(h+" is not a function")}if(c){e=c}d=0;while(d<b){var f;if(d in g){f=g[d];h.call(e,f,d,g)}d++}}}(function(b){var e;var d=function(){};var c=("assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn").split(",");while(e=c.pop()){b[e]=b[e]||d}})(window.console=window.console||{})})(jQuery);
