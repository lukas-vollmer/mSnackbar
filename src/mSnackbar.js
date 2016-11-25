(function ($)
{
    jQuery.mSnackbar = function (text)
    {
        var el = $('#mSnackbarContainer');
        if(text)
        {
            el.find('.mSnackbar').not('.slideOut').addClass('slideOut');
            if(!el.length)
            {
                $('body').append('<div id="mSnackbarContainer"></div>');
                var el = $('#mSnackbarContainer');
            }
            if(el.find('.mSnackbar').length>0)
            {
                el.append('<div class="mSnackbar">'+text+'</div>');
            }else{
                el.append('<div class="mSnackbar slideIn">'+text+'</div>');
            }

            el.find('.mSnackbar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e)
            {
                $(e.currentTarget).remove();
            });

            setTimeout(function()
            {
                el.find('.mSnackbar').not('.slideOut').addClass('slideOut');
            }, 5000);
        }

        function close()
        {
            el.find('.mSnackbar').not('.slideOut').addClass('slideOut');
        }
        return
        {
            close: close
        }
    }

}(jQuery));
