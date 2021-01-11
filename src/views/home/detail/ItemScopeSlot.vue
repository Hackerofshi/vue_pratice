<template id="cpn">
  <div>
    <!-- 将子组件的persons数据绑定到子组件的插槽上，这样父组件就可以通过v-slot获取到子组件插槽上的数据，
    进而在父组件传递给子组件的标签上就可以使用子组件的数据
    -->
    测试
    <slot v-bind:persons="persons"></slot>
    <!-- // 多个插槽使用name属性，这样父组件中就可以通过`v-slot:name`获取到子组件的绑定在name指定的插槽上子组件数据属性 -->
    <slot v-bind:cpnbook="books" name="book"></slot>
  </div>
</template>


<script>
export default {
  data() {
    return {
      persons: ["东方不败", "雪千寻"],
      books: ["c++", "js"]
    };
  }
};
</script>
