# Heading

Block `heading` need for create h1, h2, h3, h4 tags.

## Block usage

``` js
{ block : 'heading', mods : { size : 'xl' }, content : 'Level 1' },
{ block : 'heading', mods : { size : 'l' }, content : 'Level 2' },
{ block : 'heading', mods : { size : 'm' }, content : 'Level 3' },
{ block : 'heading', mods : { size : 's' }, content : 'Level 4' }
```

You can find all settings for styling in 'variables' block.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Mods</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>size</td>
        <td>
            <code>String</code>
        </td>
        <td>Heading level. Use on xl, l, m, or s for h1, h2, h3, h4 levels.</td>
    </tr>
</table>
