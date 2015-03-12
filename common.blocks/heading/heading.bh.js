module.exports = function(bh) {

    bh.match('heading', function(ctx, json) {
        var lvl = json.lvl || 1;

        ctx.tag('h' + lvl, true);
        ctx.mod('lvl', lvl, true);
    });
    
};
