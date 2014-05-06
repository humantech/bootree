+function ($) {
    'use strict';

    if (!$.fn.switchClass) {
        throw new Error('jswitchClass is required!')
    }

    // Bootree public class definition
    // ==============================

    var Bootree = function (element, options) {
        this.$element  = $(element)
        this.options   = $.extend({}, Bootree.DEFAULTS, options)
    }

    Bootree.DEFAULTS = {}

    // Bootree plugin definition
    // ========================

    function Plugin(option) {

        return this.each(function () {
            var $this   = $(this)
                data    = $this.data('bs.bootree'),
                options = typeof option == 'object' && option

            if (!data) {
                $this.data('bs.bootree', (data = new Bootree(this, options)))
            }

        })
    }

    var old = $.fn.Bootree

    $.fn.Bootree             = Plugin
    $.fn.Bootree.Constructor = Bootree


    // Bootree no conflict
    // ==================

    $.fn.Bootree.noConflict = function () {
        $.fn.Bootree = old
        return this
    }


    // Bootree API
    // ===============

    $.fn.bootree = function() {
        
        return this.each(function() {
            
            $(this).find('li')
                .has('ul')
                .addClass('nav-tree')
                .prepend($('<span>').addClass('hitarea'))
                .not('.nav-tree-expanded')
                .addClass('nav-tree-collapsed')
            
            $(this).find('li .hitarea')
                .on('click', function () {
 
                    $(this).parent()
                       .children('ul')
                       .toggle(0, function () {
 
                            $(this).parent('li')
                                .switchClass(
                                    'nav-tree-collapsed',
                                    'nav-tree-expanded'
                                )
 
                        })
 
                })
        })
 
    }

}(jQuery);