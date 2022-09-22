### v-model 
- может иметь модификатор, например .trim или .number 
### Динамические классы
`:class="{strikeout: item.purchased, priority: item.highPriority}"`

или

```
:class="[
strikeout: item.purchased,
priority: item.highPriority
"some-class"
]"
```

Второй вариант позволяет делать комбинацию условного css и статических классов, а также писать тернарные выражения

### Вычисляемые свойства - computed
```
computed:{
reversedItems(){
return [...this.items].reverse()
}
```

- Не производим вычисления на текущем объекте, только на копии.
- Вычисляемые свойства кэшируются в отличие от method.
- Если мы меняем отображенные данные используем computed, если данные которые еще не отображены, то method.

### Composition API
- Синтаксический сахар для метода setup().
- Доступ к значениям элементов массива или объекта в методах необходимо получать через свойство (метод?) value.
- Для ref есть альтернатива reactive, которую можно использовать с массивами и объектами без вызова value.

### Pinia
- All store properties (id, patch, reset, etc) are now prefixed with $.
- We can return a function from the getter to accept any arguments.
- Мы имеем доступ к  state, getters и actions в pinia в Option API при помощи .`..mapState` и `...mapActions`
- Мы можем подписаться actions ($onAction) и производить действия после успешного action или отлавливать ошибки ($onError)