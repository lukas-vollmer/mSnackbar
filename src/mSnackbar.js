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
                var dataId = (parseInt(el.find('.mSnackbar').last().data('id'))+1);
                el.append('<div class="mSnackbar" data-id="'+dataId+'">'+text+'</div>');
                setTimeout(function()
                {
                    el.find('.mSnackbar[data-id="'+dataId+'"]').not('.slideOut').addClass('slideOut');
                }, 5000);
            }else{
                el.append('<div class="mSnackbar slideIn" data-id="0">'+text+'</div>');
            }

            el.find('.mSnackbar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e)
            {
                $(e.currentTarget).remove();
            });
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
