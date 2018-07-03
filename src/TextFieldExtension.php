<?php

namespace LittleGiant\AdminTextLength;

use SilverStripe\Core\Extension;

/**
 * Class TextFieldExtension
 * @package LittleGiant\AdminTextLength
 * @property \SilverStripe\Forms\TextField $owner
 */
class TextFieldExtension extends Extension
{
    const LENGTH_HINT_ATTRIBUTE = 'data-hint-length';

    /**
     * @param int $length
     * @return \SilverStripe\Forms\TextField
     */
    public function setLengthHint($length)
    {
        $this->owner->setAttribute(static::LENGTH_HINT_ATTRIBUTE, $length);
        return $this->owner;
    }

    /**
     * @return \SilverStripe\Forms\TextField
     */
    public function disableLengthHint()
    {
        $this->owner->setAttribute(static::LENGTH_HINT_ATTRIBUTE, null);
        return $this->owner;
    }
}
