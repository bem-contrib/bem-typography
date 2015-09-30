module.exports = function(bh) {

    bh.match('heading', function(ctx) {
        ctx.tag('h1', true);
    });

    bh.match('heading_size_s', function(ctx) {
        ctx.tag('h4', true);
    });

    bh.match('heading_size_m', function(ctx) {
        ctx.tag('h3', true);
    });

    bh.match('heading_size_l', function(ctx) {
        ctx.tag('h2', true);
    });

    bh.match('heading_size_xl', function(ctx) {
        ctx.tag('h1', true);
    });

};
