
              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.



# Pictogram

A simple service to map human concepts to pictures.

```js
 var ruby = pictogram.meta('ruby')
 console.log(ruby)
```

`pictogram.meta('ruby')` gets you the data

```json
{
   "name": "ruby",
   "file": "ruby/ruby.png",
   "source": {
     "url": "https://avatars0.githubusercontent.com/u/210414?v=3&s=200",
     "referrer": "https://github.com/ruby",
     "headers": {
       "date": "Sat, 14 Mar 2015 10:15:13 GMT",
       "content-type": "image/png",
       "last-modified": "Wed, 19 Oct 2011 12:21:53 GMT",
     }
   }
 }
```

`pictogram('ruby')` gives you the image

```js
 var ruby = pictogram('ruby')
```
![ruby pictogram](https://avatars0.githubusercontent.com/u/210414?v=3&s=200)
