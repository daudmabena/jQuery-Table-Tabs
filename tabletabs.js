(function ($) {
    $.fn.tableTabs = function () {
        var TabTable = function (obj) {
            var tabControl = $.extend(this, obj);
            tabControl.tabs = tabControl.find('tbody');
            tabControl.controls = tabControl.find('.tab-control');
            tabControl.changeTab = function (e) {
                var index = tabControl.controls.removeClass('active').index($(e.target).addClass('active'));
                tabControl.tabs.hide().eq(index).show();
            };
            tabControl.controls.click(tabControl.changeTab);
            return tabControl;
        };

        return this.each(
            function () {
                var tabtable = new TabTable($(this));
                tabtable.controls.first().trigger('click');
            });
    };
}(jQuery));
