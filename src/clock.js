(function($){
    $.fn.clock = function(){
        var elements = $(this);
        var currentTime;
        var hour;
        var hours;
        var minute;
        var seconds;
        var str_hour;
        var str_minute;
        var str_seconds;

        setInterval(function() {
            currentTime = new Date();
            hour = currentTime.getHours();
            minute = currentTime.getMinutes();
            seconds = currentTime.getSeconds();

            elements.each(function(){
                var $this = $(this);
                str_seconds = new String(seconds);
                if (str_seconds.length === 1) {
                    seconds = "0" + seconds;
                }
                str_minute = new String(minute);
                if (str_minute.length === 1) {
                    minute = "0" + minute;
                }
                str_hour = new String(hour);
                if (str_hour.length === 1) {
                    hour = "0" + hour;
                }
                hours = hour + ":" + minute + ":" + seconds;
                $this.html(hours);
             });
        }, 1000);
    };

})(jQuery);
