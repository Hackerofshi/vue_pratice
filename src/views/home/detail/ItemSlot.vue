<template id="itslot">
  <div>
    <p>插槽item</p>
    <!-- 在cpn组件这里预留了插槽，这样在外部使用cpn组件时可以灵活传递给插槽这里一些其他组件想在插槽组件中展示的内容 -->
    <slot>
      <!-- 插槽中添加默认值 -->
      <button>默认值</button>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>
