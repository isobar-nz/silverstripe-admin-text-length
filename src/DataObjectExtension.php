<?php

namespace LittleGiant\AdminTextLength;

use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataExtension;
use SilverStripe\ORM\FieldType\DBVarchar;

/**
 * Class DataObjectExtension
 * @package LittleGiant\AdminTextLength
 */
class DataObjectExtension extends DataExtension
{
    /**
     * @param \SilverStripe\Forms\FieldList $fields
     */
    public function updateCMSFields(FieldList $fields)
    {
        foreach ($fields->dataFields() as $field) {
            if ($field instanceof TextField && $field->getMaxLength() === null) {
                $this->setFieldMaxLength($field);
            }
        }
    }

    /**
     * @param \SilverStripe\Forms\TextField $field
     */
    private function setFieldMaxLength(TextField $field)
    {
        /** @var null|\SilverStripe\ORM\FieldType\DBString $dbObject */
        $dbObject = $this->owner->dbObject($field->getName());

        if ($dbObject instanceof DBVarchar) {
            $field->setMaxLength($dbObject->getSize());
        }
    }
}
