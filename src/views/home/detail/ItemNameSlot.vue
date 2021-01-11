<template id="cpn">
  <div>
    <slot name="left"> <span>左边</span> </slot>
    <slot name="center"> <span>中间</span> </slot>
 </div>
</template>

//具名插槽
<script>
// 1. v-slot: 用于绑定子组件模板中的指定插槽(slot组件的name属性)。这样父组件传递给子组件的标签就会绑定到特定的插槽上展示
// 2. v-slot只能添加在<template></template>上。
// 3. v-slot的缩写形式为 `#` ('v-slot:center'  等价于 '#center' )
export default {


}
</script>


<style lang="less" scoped>

</style>
