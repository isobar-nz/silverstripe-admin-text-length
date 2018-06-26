const countedFieldHolderClass = 'char-counted-field-holder';
const countedFieldClass = 'char-counted-field';
const counterClass = 'char-counted-counter';
const counterFocusClass = 'char-counted-counter-focus';
const counterMaxClass = 'char-counted-counter-max';
const counterAlmostMaxClass = 'char-counted-counter-almost-max';

// This should be reflected in src/TextFieldExtension.php constant LENGTH_HINT_ATTRIBUTE
const lengthHintAttribute = 'data-hint-length';

(function($) {
  $.entwine('lg.lengthhint', function($){

    $(`input[${lengthHintAttribute}]`).entwine({
      getCounter: function() {
        return $(this).siblings(`.${counterClass}`).first();
      },
      updateCount: function() {
        const field = $(this);
        const countEl = this.getCounter();
        if (!countEl) return;

        const charCount = field.val().length;
        const hintCount = field.attr(lengthHintAttribute);
        countEl.val(`${charCount}/${hintCount}`);

        countEl.removeClass(counterMaxClass).removeClass(counterAlmostMaxClass);
        if (charCount >= hintCount) {
          countEl.addClass(counterMaxClass);
        } else if (charCount / hintCount >= 0.8) {
          countEl.addClass(counterAlmostMaxClass);
        }
      },
      onadd: function() {
        const field = $(this);
        field.addClass(countedFieldClass);
        field.parent().addClass(countedFieldHolderClass).addClass('input-group');
        $(`<input type="text" class="text ${counterClass}" disabled>`).insertAfter(field);
        this.updateCount();
      },
      oninput: function() {
        this.updateCount();
      },
      onfocusin: function() {
        this.getCounter().addClass(counterFocusClass);
      },
      onfocusout: function() {
        this.getCounter().removeClass(counterFocusClass);
      },
    });
  });
}(window.jQuery));
