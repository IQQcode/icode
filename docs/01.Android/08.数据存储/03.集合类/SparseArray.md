`SparseArray`将整数映射到对象，并且与普通的对象数组不同，它的索引可以包含间隙。`SparseArray`旨在比 a 更节省内存 [`HashMap`](https://developer.android.com/reference/java/util/HashMap)，因为它避免了自动装箱键，并且其数据结构不依赖于每个映射的额外条目对象。

请注意，此容器将其映射保存在数组数据结构中，使用二进制搜索来查找键。该实现不适用于可能包含大量项目的数据结构。它通常比 a 慢， `HashMap`因为查找需要二进制搜索，并且添加和删除需要在数组中插入和删除条目。对于最多容纳数百个项目的容器，性能差异小于 50%。

为了提高性能，容器在删除键时进行了优化：不是立即压缩其数组，而是将删除的条目标记为已删除。然后可以将条目重新用于相同的键，或者稍后在所有删除条目的单个垃圾收集中进行压缩。每当需要增大数组，或者检索映射大小或条目值时，都必须执行此垃圾回收。

可以使用`keyAt(int)`和迭代此容器中的项目 `valueAt(int)`。使用`keyAt(int)`索引的升序值迭代键 以升序返回键。在 的情况下`valueAt(int)`，键对应的值按升序返回。





> 【学习文章】
>
> - [面试还在问 SparseArray？记住 3 句话让你临时把佛脚抱好](https://juejin.cn/post/6844903961963528199)
> - [这一次，彻底搞懂SparseArray实现原理](https://juejin.cn/post/6972985532397649933)
> - https://developer.android.com/reference/android/util/SparseArray





- [ ] [更适合Android的集合 SparseArray/ArrayMap/ArraySet](https://juejin.cn/post/6844903614767595534)
- [ ] [性能优化：为什么要使用SparseArray和ArrayMap替代HashMap](https://juejin.cn/post/6897892195483779080)

