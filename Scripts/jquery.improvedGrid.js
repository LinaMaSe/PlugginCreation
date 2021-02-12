(function ($) {
    //declaracion de plug-in
    $.fn.textoAzul = function (options) {
        //obtenemos los parametros
        options = $.extend({}, $.fn.textoAzul.defaultOptions, options);

        this.each(function () {
            var element = $(this);
            element.addClass(options.elementClass);
            element.css('color', 'blue');
        });
        return this;

        //parametros del plugin
        $.fn.textoAzul.defaultOptions = {
            elementClass: 'texto-azul'
        }

        $(document).ready(function () {
            //plugin sin/con parametros
            $('p').textoAzul();
        });
    }

})(jQuery);

