Programmer's alternative to prototyping tools like Aczure.<br>
With one single htmlfile you can make a multipage layout to show your clients. <br>
Really handy for brainstorm sessions about a new website. <br>
It helps people's imagination of a website, and prevents overspecification/overdocumentating.<br>

<h1>Why</h1>
Because in some cases jamming simple HTML/CSS can be quicker for developers, especially:<br>
<br>
<ul><li>with usage of zencoding<br>
</li><li>when a developer does not need a fullfledged GUI for a simple prototype<br>
</li><li>when they want to update it live from a terminal</li></ul>

<h1>Features</h1>
<ul><li>multipage website in one single index.html !<br>
</li><li>automatic generation of menu (navigation)<br>
</li><li>ability to enhance/inject zencode snippets dynamically per menuitem<br>
</li><li>simple smarty-like template engine for dynamic content</li></ul>

<h1>Screenshot</h1>
See here a simple example, with additional use of protonotes:<br>
<br>
<img src='http://img864.imageshack.us/img864/9269/protobatserh.jpg' />

<h1>Howto</h1>
Well just get the source, include protobatser.js in our index.html, and thats all!<br>
Example for a multipage layout:<br>
<pre><code>      var prototype = { name: "Your site",<br>
                        menu:     "&lt;ul&gt;{$menu}&lt;/ul&gt;&lt;div class='clear'&gt;&lt;/div&gt;",<br>
                        menuItem: "&lt;li&gt;&lt;a href='{$href}'&gt;{$title_menu}&lt;/a&gt;&lt;/li&gt;",<br>
                        pages: [<br>
                                 { title: "Home",         title_menu: "home",    html: "div#frame&gt;div#menu+div#content^text=Lorem ipsum dolor sit amet 0.+div#left+div#right"},<br>
                                 { title: "Lorem ipsum1", title_menu: "ipsum 1", html: "div#frame&gt;div#menu+div#content^text=Lorem ipsum dolor sit amet 1.+div#left+div#right"},<br>
                                 { title: "Lorem ipsum2", title_menu: "ipsum 2", html: "div#frame&gt;div#menu+div#content^text=Lorem ipsum dolor sit amet 2.+div#left+div#right"},<br>
                                 { title: "Dynamic",      title_menu: "dynamic", html: "div#frame&gt;div#menu+div#content^text=Lorem ipsum dolor sit amet 3. {$foo}"},<br>
                               ]<br>
                       }<br>
</code></pre>

Now you will have a 4-page website prototype!<br>
See the source for more advanced examples.