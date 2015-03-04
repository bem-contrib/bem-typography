module.exports = function(bh) {

    bh.match('list_type_ordered', function(ctx) {
        ctx.tag('ol');
    });

};
