# Vue

## Bookmarklet

1. Add this link to your bookmarks: [Vue][vue]
2. Go to the site you wish to test & open the JS console
3. Click the bookmark!

  [vue]: javascript:(function(){var%20a=document.createElement('script'),b=document.getElementsByTagName('body')[0];a.src='https://raw.github.com/simmo/vue/master/vue.min.js';b.appendChild(a);})();

## Demo

[http://simmo.github.com/vue](http://simmo.github.com/vue "View demo")

## Usage

Download vue.js and include before the closing body tag in your HTML.
    
    <html>
      <head>
        <!-- Load your CSS like normal -->
      </head>
      <body>
        <!-- Your HTML goes here -->
        
        <script src="vue.js"></script>
      </body>
    </html>
    
Make sure your have your browser's console open and you should start to see output. Boom.
    
## Requirements
JavaScript is required. Currently this works in Safari and Firefox. It doesn't work in Chrome if your are accessing your files via the file:// protocol (this is a reported bug), http:// should be fine though. Not yet tested in IE. Will only currently identify media queries on the same domain.
