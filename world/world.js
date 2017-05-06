function World(limitX, limitY) {    var beginX = Math.floor( limitX / 2 );    var beginY = Math.floor( limitY / 2 );    var currentX = beginX;    var currentY = beginY;    var rand = [1, -1];    fillTable();    var prev;    setRedTd(currentX, currentY);        this.makeStep = function() {                var rnd = getRandomInt(0, 1);         if (rnd) {            currentX = step(currentX, limitX);           } else {            currentY = step(currentY, limitY);        }        setRedTd(currentX, currentY);        if (!(currentX == beginX && currentY == beginY )) {            return true;         }                return false;     };        function step(current, limit) {        var rnd = getRandomInt(0, 1);        current += rand[rnd];        if (current < 0) {            current = limit - 1;        } else if (current >= limit) {            current = 0;        }                return current;    }       function fillTable() {        for (var i = 0; i < limitX; i++) {            showEmptyRow();        }    }    function showEmptyRow() {        $('table.world').append("<tr></tr>");        for (var j = 0; j < limitY; j++) {            $('table.world tr:last').append("<td>&nbsp;</td>");         }    }        function setRedTd(x, y) {        if (prev != undefined) {            prev.html("&nbsp;");        }        prev = $('table.world tr').eq(x).find('td').eq(y);        prev.addClass("red");        prev.html("x");    }        function getRandomInt(min, max)    {        return Math.floor(Math.random() * (max - min + 1)) + min;    }}