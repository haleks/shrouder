// Haleks — Shrouder
// https://haleks.ca
// Licensed under MIT Open Source

 +function ($) {
    'use strict';

    // Shrouder
    // --------
    // - Shroud your email via the elements data attributes.
    // - @param string element
    // - @param object options
    function Shrouder(element, options) {
        this.element = element
        this.$element = $(element)
        this.class = $(element).attr('class')
        this.options = options

        this.create()
        this.refresh()
    }

   Shrouder.VERSION = '0.1.0'

   // Create
   // ------
   // - Create an schrouded email string.
   // - @param void
   Shrouder.prototype.create = function () {
       var user = this.options.user
       var domain = this.options.domain

       this.shrouder = user + '@' + domain
       this.options.text = (typeof this.options.text === 'undefined') ? this.shrouder : this.options.text;
   }

   // Refresh
   // -------
   // - Refresh DOM with newly created element.
   // - @param void
   Shrouder.prototype.refresh = function () {
       var mailto = '<a href="mailto:' + this.shrouder + '" class="' + this.class + '" itemprop="shrouder">' + this.options.text + '</a>'

       this.$element.after(mailto)
       this.element.remove()
   }

   // Plugin
   // ------
   // - Create the shrouder plugin.
   // - @param object option
   function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('haleks.shrouder')
            var options = typeof option == 'object' && option

            if (!data) $this.data('haleks.shrouder', (data = new Shrouder(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.shrouder

    $.fn.shrouder = Plugin
    $.fn.shrouder.Constructor = Shrouder

    // No Conflict
    // -----------
    // - Prevent plugin conflicts.
    // - @param void
    $.fn.shrouder.noConflict = function () {
        $.fn.shrouder = old
        return this
    }

    // Data API
    // --------
    // - Initialize plugin via data attributes.
    // - @param void
    $(window).on('load.shrouder.data-api', function () {
        $('[data-toggle="shrouder"]').each(function () {
            var $shrouder = $(this)
            Plugin.call($shrouder, $shrouder.data())
        })
    })

 }(jQuery);

//# sourceMappingURL=schrouder.js.map
