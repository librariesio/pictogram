
              _        __
       ___   (_) ____ / /_ ___   ___ _  ____ ___ _  __ _
      / _ \ / / / __// __// _ \ / _ `/ / __// _ `/ /  ' \
     / .__//_/  \__/ \__/ \___/ \_, / /_/   \_,_/ /_/_/_/
    /_/                        /___/

                 A pictorial symbol for a word or phrase.

                                  A libraries.io project.


# [Pictogram](http://libraries.io/rubygems/pictogram)

A rails asset gem for language and package manager logo images

## Install via rubygems
```sh
gem install pictogram
```

## Usage

Require `pictogram.css` with sprockets in `application.scss`:

```css
@import "pictogram";
```

Then you can use css classes to add logos to your page:

```html
<div class="pictogram pictogram-javascript"></div>
```

## Adding a logo

Make a folder in [`/vendor/assets/images`](vendor/assets/images) of the name of the language or package manager (lower cased):

    mkdir /vendor/assets/images/foobar

Add the logo into that folder it should be 400x400 and in png format, file name should be the same as the folder with .png extension:

    cp path/to/my/logo/foobar.png /vendor/assets/images/foobar/foobar.png

Add selector to [`vendor/assets/stylesheets/pictogram.css`](vendor/assets/stylesheets/pictogram.css) with the relative path to the logo image:

```css
.pictogram-foobar {
  background-image: image_url("foobar/foobar.png");
  background-color: transparent;
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/librariesio/pictogram. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
