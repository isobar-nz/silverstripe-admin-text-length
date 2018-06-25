<?php

namespace LittleGiant\AdminTextLength;

use SilverStripe\Admin\LeftAndMainExtension as SSLeftAndMainExtension;
use SilverStripe\View\Requirements;

/**
 * Class LeftAndMainExtension
 * @package LittleGiant\AdminTextLength
 */
class LeftAndMainExtension extends SSLeftAndMainExtension
{
    /**
     *
     */
    const MODULE_ASSET_PREFIX = 'littlegiant/silverstripe-admin-text-length: ';

    /**
     *
     */
    public function init()
    {
        parent::init();

        Requirements::css(static::MODULE_ASSET_PREFIX . 'client/dist/index.css');
        Requirements::javascript(static::MODULE_ASSET_PREFIX . 'client/dist/index.js');
    }
}
