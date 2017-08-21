var elements = ["orion", "fn", "fade", "extend", "<li class='showhide'><span class='title'>菜单</spa…><em></em><em></em><em></em><em></em></span></li>", "prepend", ".orion-menu", "indicator", "length", "ul", "children", "<span class='indicator'></span>", "append", "each", "li", "find", "resize", "unbind", "hide", "innerWidth", "mouseleave", "animation", "removeClass", "speed", "fadeOut", "stop", "bind", "mouseover", "addClass", "fadeIn", ".orion-menu li", "click", "display", "css", "none", "slideDown", "slideUp", ".orion-menu > li", ".orion-menu > li:not(.showhide)", "show", ".orion-menu > li.showhide", ":hidden", "is"];

$[elements[1]][elements[0]] = function(_0x401fx1) {
    var _0x401fx2 = {
        speed: 300,
        animation: elements[2],
        indicator: true
    };
    $[elements[3]](_0x401fx2, _0x401fx1);
    $(elements[6])[elements[5]](elements[4]);
    if (_0x401fx2[elements[7]] == true) {
        $(elements[6])[elements[15]](elements[14])[elements[13]](function() {
            if ($(this)[elements[10]](elements[9])[elements[8]] > 0) {
                $(this)[elements[12]](elements[11]);
            };
        });
    };
    _0x401fx3();
    $(window)[elements[16]](function() {
        _0x401fx3();
    });
    function _0x401fx3() {
        $(elements[6])[elements[15]](elements[14])[elements[17]]();
        $(elements[6])[elements[15]](elements[9])[elements[18]](0);
        if (window[elements[19]] <= 767) {
            _0x401fx6();
            _0x401fx5();
        } else {
            _0x401fx7();
            _0x401fx4();
        };
    };
    function _0x401fx4() {
        $(elements[30])[elements[26]](elements[27],
        function() {
            $(this)[elements[10]](elements[9])[elements[25]](true, true)[elements[29]](_0x401fx2[elements[23]])[elements[28]](_0x401fx2[elements[21]]);
        })[elements[26]](elements[20],
        function() {
            $(this)[elements[10]](elements[9])[elements[25]](true, true)[elements[24]](_0x401fx2[elements[23]])[elements[22]](_0x401fx2[elements[21]]);
        });
    };
    function _0x401fx5() {
        $(elements[37])[elements[26]](elements[31],
        function() {
            if ($(this)[elements[10]](elements[9])[elements[33]](elements[32]) == elements[34]) {
                $(this)[elements[15]](elements[9])[elements[35]](_0x401fx2[elements[23]])[elements[28]](_0x401fx2[elements[21]]);
            } else {
                $(this)[elements[10]](elements[9])[elements[36]](_0x401fx2[elements[23]])[elements[22]](_0x401fx2[elements[21]]);
            };
        });
    };
    function _0x401fx6() {
        $(elements[38])[elements[18]](0);
        $(elements[40])[elements[39]](0);
        $(elements[40])[elements[26]](elements[31],
        function() {
            if ($(elements[37])[elements[42]](elements[41])) {
                $(elements[37])[elements[35]](300);
            } else {
                $(elements[38])[elements[36]](300);
                $(elements[40])[elements[39]](0);
            };
        });
    };
    function _0x401fx7() {
        $(elements[37])[elements[39]](0);
        $(elements[40])[elements[18]](0);
    };
};