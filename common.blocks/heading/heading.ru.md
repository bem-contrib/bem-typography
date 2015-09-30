# Heading

Блок `heading` используется для создания h1, h2, h3, h4 тэгов.

## Использование блока

``` js
{ block : 'heading', mods : { size : 'xl' }, content : 'Level 1' },
{ block : 'heading', mods : { size : 'l' }, content : 'Level 2' },
{ block : 'heading', mods : { size : 'm' }, content : 'Level 3' },
{ block : 'heading', mods : { size : 's' }, content : 'Level 4' }
```

Все настройки можно найти в блоке 'variables'.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>size</td>
        <td>
            <code>String</code>
        </td>
        <td>Уровень заголовка. Доступны xl, l, m или s для h1, h2, h3 и h4 соответсвенно.</td>
    </tr>
</table>
