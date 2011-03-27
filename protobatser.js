/**  MICRO PROTOBATSER FRAMEWORK BY THE CODER OF SALVATION : minimalistic, nonobtrusive, easily co-exists with prof.frameworks 
/**/ var is =                                     { Null:function(a){  return a===null; }, Undefined:function(a){  return a===undefined; }, nt:function(a){  return(a===null||a===undefined); }, Function:function(a){  return(typeof(a)==='function')?a.constructor.toString().match(/Function/)!==null:false; }, String:function(a){  return(typeof(a)==='string')?true:(typeof(a)==='object')?a.constructor.toString().match(/string/i)!==null:false; }, Array:function(a){  return(typeof(a)==='object')?a.constructor.toString().match(/array/i)!==null||a.length!==undefined:false; }, Boolean:function(a){  return(typeof(a)==='boolean')?true:(typeof(a)==='object')?a.constructor.toString().match(/boolean/i)!==null:false; }, Date:function(a){  return(typeof(a)==='date')?true:(typeof(a)==='object')?a.constructor.toString().match(/date/i)!==null:false; }, HTML:function(a){  return(typeof(a)==='object')?a.constructor.toString().match(/html/i)!==null:false; }, Number:function(a){  return(typeof(a)==='number')?true:(typeof(a)==='object')?a.constructor.toString().match(/Number/)!==null:false; }, Object:function(a){  if( is.Null(a) || is.Undefined(a) ) return false;  return(typeof(a)==='object') ? a.constructor.toString().match(/object/i) !==null : false; }, RegExp:function(a){  return(typeof(a)==='function')?a.constructor.toString().match(/regexp/i) !==null : false; }};
/**/ var tplVars   =                              {}
/**/ var domLoaded = function (callback)          {  /* Internet Explorer */  /*@cc_on  @if (@_win32 || @_win64)    document.write('<script id="ieScriptLoad" defer src="//:"><\/script>');    document.getElementById('ieScriptLoad').onreadystatechange = function() {      if (this.readyState == 'complete') {        callback();      }    };    return;  @end @*/  /* Mozilla, Chrome, Opera */  if (document.addEventListener) {    document.addEventListener('DOMContentLoaded', callback, false);    return;  }  /* Safari, iCab, Konqueror */  if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {    var DOMLoadTimer = setInterval(function () {      if (/loaded|complete/i.test(document.readyState)) {        callback();        clearInterval(DOMLoadTimer);      }    }, 10);    return;  }  /* Other web browsers */  window.onload = callback;};
/**/ if( typeof( window.$ ) != "Function" ) window.$ = function $( id ){ var el   = document.getElementById( id ); var tags = ["div","img","span","form","b","a","i","u","td","table"]; if( el && el.id != id && el.name == id ){ for( i in tags ){ var els = document.getElementsByTagName( tags[i] ); for( j in els ) if( els[j].id == id ) return els[j]; } } return el;}
/**/ function _assign( varname, value )           { tplVars[ varname ] = value; }
/**/ function _fetch( content )                   { for( key in tplVars ){ reg = new RegExp( "\\{\\$"+key+"\\}", 'g' ); content = content.replace( reg, this.tplVars[key] ); } reg = new RegExp( "\\{\\$[A-Za-z0-9_-]*\\}", 'g' ); content = content.replace( reg, "" ); return content; }
/**/ function $( id )                             { return $( id ); }
/**/ function $_GET( name, url )                  { name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]"); var regexS = "[\\?&]"+name+"=([^&#]*)"; var regex = new RegExp( regexS ); var results = regex.exec( url ? url : window.location.href ); if( results == null ) return ""; else return results[1]; }
/**/ function _print_r(theObj, outputEl )         { var html; if( is.Array( theObj ) || is.Object( theObj ) ){  html += "<ul style='margin-left:50px'>";  for(var p in theObj){   if( is.Array( theObj[p] ) || is.Object( theObj[p] ) ){    html += "<li>["+p+"] => "+typeof(theObj)+"</li>";    html += "<ul>";    $print_r(theObj[p]);    html += "</ul>";   } else {    html += "<li>["+p+"] => "+theObj[p]+"</li>";   }  }  html += "</ul>"; } var output = document.getElementById( outputEl ); if( output )  output.innerHTML += html; return html;}
/**/ function _hyphenate( str )                   { if ( !str ) return false; str = String(str); str = str.toLowerCase(); return str.replace(/[^a-z0-9]/gi, "-");}
/**/ function _formToString( formId )             { var form  = $sutra( formId ); if( !form ) return "form not found"; var elements = form.elements; var nElements = elements.length; var string = ""; for( var i = 0; i < nElements; i++ ){ var element = elements[i]; if( element == null ) continue; if ( element.type == "checkbox" || element.type == "radio" ) { string += element.name; string += element.checked ? "=true&" : "=false&"; }else if (element.type == 'select-one') { string += element.name + "=" + element.options[ element.selectedIndex ].value + "&"; }else if (element.type == 'text' || element.type == 'password' || element.type == 'hidden' ) { string += element.name + "=" + element.value + "&"; } } return encodeURI(string); }
/**/ function _validateForm ( formId )            { var form  = $sutra( formId ); if( !form ) return "form not found"; var elements = form.elements;     var nElements = elements.length;      var error  = false;     for( var i = 0; i < nElements; i++ ){         var element = elements[i];        if( element == null || !element.className.match("required") ) continue;        if (element.type == 'select-one'){          error &= (element.selectedIndex == 0);          element.style.background = "#FF0000";        }else       if (element.type == 'text' || element.type == 'password' || element.type == 'hidden' ) {             error &= (element.value.length > 0 );           if( element.value.length == 0 ) element.style.background = "#FF0000";         }      } return !error;  }
/**/ function _addEvent(obj,type,fn)              { if (obj.addEventListener) { obj.addEventListener(type,fn,false); return true; } else if (obj.attachEvent) { obj['e'+type+fn] = fn; obj[type+fn] = function() { obj['e'+type+fn]( window.event );}; var r = obj.attachEvent('on'+type, obj[type+fn]); return r; } else { alert("event chaining disabled!"); obj['on'+type] = fn; obj['on'+type] = (function(old) {     return function() {     if (old) old.call(this, arguments);     fn.call( this.arguments );     return false;    }    })( obj['on'+type ].onclick ); return true; } }
/**/ function _in_array (needle,haystack,argStrict){  var key = '', strict = !!argStrict;   if (strict) {    for (key in haystack) {      if (haystack[key] === needle) {        return true;      }    }  } else {    for (key in haystack) {      if (haystack[key] == needle) {        return true;      }    }  }   return false; }
/**/ function _hasClass( className, classNames )  { if( classNames == undefined ) return false; var names = classNames.split(' '); return $in_array( className, names ); }
/**/ function _assert( expr, description )        { if( !expr ){ var err = "PROTOBATSER ASSERTION FAIL: "+description; if( window.console ) console.log(err); alert(err); return false; }else return true; }
/**/ function _trace( mixed )                     { if( window.console ){ if( !is.String(mixed) && console.dir != undefined ) console.dir(mixed); else console.log("PROTOBATSER TRACE: "+mixed); } return mixed }

// autofire crossbrowser onload
// eval is evil, but we do this because IE8 loads external & inline javascripts parallel
var on = { domready: function(){ eval("onDomReady();");} } 
domLoaded( on.domready );

/*
 * description: zencode provides ZEN-Coding functionality to MooTools. Expand Abbreviation extends Elements.
 *              *edit-by-leon* made native, framework-independent function
 * license: MIT-style
 * authors:
 * - Sebastian Wohlrab
 * - Leon van Kammen | The Coder of Salvation (http://leon.vankammen.eu)
 */

function zencode( str, parent ) {
    var parent = parent ? parent : this;

    if ( str != undefined && str.length && str.match('>') != null )
    {
        var nodes = str.split('>');

        for ( var i = 0; i < nodes.length; i++ )
        {
            if ( nodes[i].split('+').length > 1 )
            {
                var subnodes = nodes[i].split('+');
                for ( var j = 0; j < subnodes.length; j++ )
                {
                    var newEl = createElement( subnodes[j] )
                    adoptNew(parent, newEl);
                }
                parent = newEl;
            }
            else {
                var newEl = createElement( nodes[i] );
                adoptNew(parent, newEl);
                parent = newEl;
            }
        }
    }
    else {
      if( parent.appenChild ) parent.appendChild( createElement( str ) );
      if( parent.document ) parent.document.body.appendChild( createElement( str ) );
    }

    function adoptNew( parent, element )
    {
        if ( parent.length > 1 )
        {
            for ( var i = 0; i < parent.length; i++ )
            {
                if ( element.length > 1 )
                {
                    for ( var j = 0; j < element.length; j++ )
                    {
                        parent[i].appendChild( element[j].clone() );
                    }
                }
                else {
                    parent[i].appendChild( element.clone() );
                }
            }
        }
        else {
            if ( element.length > 1 )
            {
                for ( var i = 0; i < element.length; i++ )
                {
                    parent.appendChild( element[i] );
                }
            }
            else {
                if( parent.appendChild ) parent.appendChild( element );
                if( parent.document )    parent.document.body.appendChild( element );
            }
        }
    }
    function createElement( str )
    {
      if( str == undefined ) return;
        if ( str.split("^").length > 1 ) {
            var additional = str.split("^");
            str = additional[0];
            additional = additional[1];
        }

        if ( str.split("#").length > 1 )
        {
            var elementArr = str.split("#");
            var id = elementArr[1];
            if ( id.split(".").length > 1 )
            {
                var classes = id.split(".");
                id = classes.shift();
            }
            var element = document.createElement( elementArr[0] );
        }
        else {
            if ( str.split('*').length > 1 )
            {
                var strIterate = str.split('*');
                str = strIterate[0];
                strIterate.shift();
            }
            if ( str.split('.').length > 1 )
            {
                var classes = str.split('.');
                var element = document.createElement( classes.shift() );
            }
            else {
                var element = document.createElement( str );
            }
        }
        
        if ( element.tagName == 'a' )
        {
            element.setAttribute('href', '#');
        }
        if ( additional ) {
            addAditional( element, additional );
        }

        if ( id )
        {
            element.setAttribute('id', id );
        }
        if ( classes )
        {
            var classstr = "";
            for ( var i = 0; i < classes.length; i++ )
            {
                classstr += " " + classes[i];
            }
            classstr = classstr.substr(1, classstr.length);
            element.setAttribute('class', classstr );
        }
        if ( strIterate )
        {
            var elements = [];
            for ( var i = 0; i < strIterate; i++ )
            {
                elements.push( element.clone() );
            }
        }
        if ( elements )
        {
            return elements;
        }
        else {
            return element;
        }
    }
    function addAditional( element, additional ) {
        if ( additional.search(',') > 0 )
        {
            var additionals = additional.split(',');
            
            for ( var i = 0; i < additionals.length; i++ )
            {
                var segment = additionals[i].split('=');
                if( segment[0] == "text" && element.innerHTML != undefined) element.innerHTML += segment[1];
                else element.setAttribute(segment[0], segment[1]);
            }
        }
        else {
          if( additional != undefined ){
            var segment = additional.split('=');
            if( segment[0] == "text" && element.innerHTML != undefined) element.innerHTML += segment[1];
            else element.setAttribute(segment[0], segment[1]);
          }
        }
    }
}

var protobatser   = new function(){}
protobatser.vars  = {};
protobatser.init  = function( prototype ){
  _trace("init!");
  _trace( prototype );
  this.vars.prototype = prototype;
  return is.Object( prototype );
}
protobatser.onMenuChange = function( title_menu, el ){
  _trace( "onMenuChange: "+title_menu );
  if( this.vars.prototype.menuChange ) this.vars.prototype.menuChange( title_menu );
	var links = document.getElementsByTagName('a');
	if( links.length ) 
	  for( i in links ) 
		  links[i].className = (( links[i] == el ) ? "active " : String( links[i].className ).replace("active","" ));
}

protobatser.render = function( index ){
  _trace("render");
  var page,pages,index,html_menu,html;
  html_menu = "";
  pages     = this.vars.prototype.pages;
  index     = is.Number( index ) ? index : 0;
  page      = pages[ index ];
  // generate menu
  for( i in pages ){
    _assign( "href",       "javascript:protobatser.render( "+i+") && protobatser.onMenuChange( \""+ pages[i].title_menu +"\", this );" );
    _assign( "title_menu", pages[i].title_menu );
    html_menu += "" + _fetch( this.vars.prototype.menuItem );
  }
  $('title').innerHTML = this.vars.prototype.name + " - " + page.title;
  document.body.innerHTML = "";
  zencode(page.html ); // inserted to body because no parent given
  _assign( "menu", html_menu );
  $('menu').innerHTML += _fetch( this.vars.prototype.menu );
  protobatser.onMenuChange( pages[ index ].title_menu );
}
