(function ($)
{
    jQuery.mSnackbar = function (text)
    {
        var el = $('#mSnackbarContainer');
        if(text)
        {
            if(!el.length)
            {
                $('body').append('<div id="mSnackbarContainer"></div>');
                var el = $('#mSnackbarContainer');
            }
            close();
            if(el.find('.mSnackbar').length>0)
            {
                setTimeout(function()
                {
                    el.append('<div class="mSnackbar slideIn" data-time="'+Math.floor(Date.now() / 1000)+'">'+text+'</div>');
                }, 300);
            }else{
                el.append('<div class="mSnackbar slideIn" data-time="'+Math.floor(Date.now() / 1000)+'">'+text+'</div>');
            }

            setTimeout(function()
            {
                if(el.find('.mSnackbar').data('time')-5<Math.floor(Date.now() / 1000)){
                    el.find('.mSnackbar').addClass('slideOut');
                    setTimeout(function()
                    {
                        el.find('.mSnackbar.slideOut').remove();
                    }, 300);
                }
            }, 5000);


            el.find('.mSnackbar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e)
            {
                $(e.currentTarget).remove();
            });
        }

        function close()
        {
            el.find('.mSnackbar').not('.slideOut').addClass('slideOut');
            setTimeout(function()
            {
                el.find('.mSnackbar.slideOut').remove();
            }, 300);
        }
        return{
            close: close
        }
    }

}(jQuery));