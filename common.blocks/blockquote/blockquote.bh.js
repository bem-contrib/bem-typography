module.exports = function(bh) {

    bh.match('blockquote', function(ctx, json) {
        ctx.tag('blockquote');

        ctx.content([
            {
                block : 'paragraph',
                mix : { block : ctx.block, elem : 'content' },
                content : ctx.content()
            },
            json.source && {
                elem : 'footer',
                tag : 'footer',
                content : json.source
            }
        ]);
    });

};
