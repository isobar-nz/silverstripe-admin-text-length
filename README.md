# SilverStripe Admin Text Length
Add a text length hint to CMS fields.

![Admin Text Length](https://github.com/littlegiant/silverstripe-admin-text-length/blob/master/images/admin-text-length.png)

![Admin Text Length with a warning](https://github.com/littlegiant/silverstripe-admin-text-length/blob/master/images/admin-text-length-warning.png)

## Installation

Installation via composer
```
$ composer require littlegiant/silverstripe-admin-text-length
```

## Usage

Call `->setLengthHint()` with the length required on any `TextField`.

```php
TextField::create('LimitedLength', 'LimitedLength')->setLengthHint(100)
```

## Contributing
### Code guidelines

This project follows the standards defined in:

* [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md)
* [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)
* [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
