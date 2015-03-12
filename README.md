# bem-typography

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/verybigman/bem-typography?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This README also available in [russian](https://github.com/verybigman/bem-content/blob/master/README.ru.md).

Library for work with typography in BEM methodology. Inspired by [Gridlover](http://www.gridlover.net/app/).

## Dependencies

- `i-bem` block from [bem-core](https//github.com/bem/bem-core)

## Install

Take way like connecting with [bem-core](https//github.com/bem/bem-core)
and [bem-components](https//github.com/bem/bem-components) libraries.
Use [bower-npm-install](https://github.com/arikon/bower-npm-install) to install bem-components from GitHub or Bower register.

## Easy example

Example for heading and paragpaph.

``` javascript
{ block : 'heading', content : 'This is heading of level 1' },
{
    block : 'paragraph',
    content : [
        'Simple text'
    ]
}
```

## Calculating

Lib have block `calc` for calculating fonts sizes. Any sizes writed in rem. It's absolutely right way for fonts. For more info about math model you can watch [here](https://github.com/verybigman/bem-content/blob/master/common.blocks/calc/calc.en.md).

## Customize

Lib very simple to customize. You can configure everything.
To do this you need create block `variables` on one of levels in your project and override any variable in it. So, list of variables you can watch [here](https://github.com/verybigman/bem-content/blob/master/common.blocks/variables/variables.styl).

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman)) @awinogradov

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/bem-typography/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
