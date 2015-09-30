({
    block : 'page',
    title : 'bem-content: heading',
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { block : 'heading', content : 'Default heading' },
        { block : 'heading', mods : { size : 's' }, content : 'Heading of level 1' },
        { block : 'heading', mods: { size: 'm' }, content : 'Heading of level 2' },
        { block : 'heading', mods: { size: 'l' }, content : 'Heading of level 3' },
        { block : 'heading', mods: { size: 'xl' }, content : 'Heading of level 4' },
        { tag : 'hr' },
        {
            block : 'heading',
            content : [
                'Heading',
                ' from ',
                'array'
            ]
        },
        {
            block : 'heading',
            mods :  { test : 'mod' },
            content : 'Heading with mods'
        },
        {
            block : 'heading',
            mix :  { block : 'custom', elem : 'item' },
            content : 'Heading with mix'
        },
        {
            block : 'heading',
            attrs :  { 'data-title' : 'Heading title', title : 'Heading title' },
            content : 'Heading with custom attributes'
        },
        {
            block : 'heading',
            lvl : 2,
            mods :  { test : 'mod' },
            mix :  { block : 'custom', elem : 'item' },
            attrs :  { 'data-title' : 'All in one', title : 'All in one' },
            content : 'All in one'
        },
    ]
})
