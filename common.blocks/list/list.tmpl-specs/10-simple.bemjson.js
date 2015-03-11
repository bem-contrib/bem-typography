({
    block : 'list',
    mods : { type : 'ordered', test : 'mod' },
    mix :  { block : 'custom', elem : 'item' },
    attrs :  { 'data-title' : 'All in one', title : 'All in one' },
    items : [
        'ordered item 1',
        'ordered item 2',
        'ordered item 3',
        [
            'ordered item 4',
            {
                block : 'list',
                items : ['nested item 1', 'nested item 2']
            }
        ]
    ]
});
