var CloudLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        for (var i = 0; i < 10; i++) {
            var x = size.width * Math.random();
            var y = size.height * Math.random();
            this.drawClud(x, y);
        }

        return true;
    },

    drawClud: function (x, y) {
        this.draw = new cc.DrawNode();
        //drawCircle
        var total = 10;
        var radius = 20;
        for (var i = 0; i < 10; i++) {
            var w = 5 + Math.random() * radius;
            var c = Math.cos((i * 6.28 + Math.random() * 6.28) / total) * radius * 1.5;
            var s = Math.sin((i * 6.28 + Math.random() * 6.28) / total) * radius;
            // this.draw.drawCircle(cc.p(x+Math.random()*100, y+Math.random()*100), w, 0, 100, false, w*2, cc.color(187, 243, 235, 255));
            this.draw.drawDot(cc.p(x + c, y + s), w, cc.color(187, 243, 235, 200));
        }
        this.draw.drawDot(cc.p(x, y), radius, cc.color(187, 243, 235, 255));
        this.addChild(this.draw);
    }
});