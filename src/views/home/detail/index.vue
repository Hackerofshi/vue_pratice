<template>
  <div class="maincontainer">
    <div class="topcontainer">
      <div class="active">
        <div class="item1">
          <img class="imghead" src="../../../assets/icon_launcher.jpg" />
          <div class="itemcontent1">
            <span>ffff</span>
          </div>
        </div>
        <div class="item2">
          <span class="s1">按钮</span>
        </div>
      </div>
      <div class="topitem2">
        <el-button type="danger" plain class="button-type">主页面1</el-button>
        <el-button type="danger" plain class="button-type">主页面2</el-button>
        <el-button type="danger" plain class="button-type">主页面3</el-button>
        <el-button type="danger" plain class="button-type">主页面4</el-button>
        <el-button type="danger" plain class="button-type">主页面5</el-button>
      </div>
    </div>
    <div class="spaceline"></div>
    <div class="topitem3">
      <Item></Item>
      <div style="width:20px"></div>
      <Item>
        <!-- 其他组件使用cpn组件时可以在这个位置可以给cpn组件的插槽传递自己想展示的内容 -->
        <button>btn</button>
      </Item>
      <!-- 下面这个cpn组件传递的button和input会全部替换到预留插槽位置 -->
      <div style="width:20px"></div>
      <Item>
        添加多个元素
        <button>btn</button>
        <input type="text" />
      </Item>
      <div style="width:20px"></div>
      <ItemNameSlot>
        <!-- 使用template将要传递给子组件cpn的标签button包裹起来，
         再使用v-slot绑定子组件cpn中预留的指定插槽(通过v-slot绑定slot标签的name属性);
        后面父组件的button就可以渲染到cpn的插槽名为center的插槽上-->
        <template v-slot:center>
          <button>btn</button>
        </template>
      </ItemNameSlot>
      <div style="width:20px"></div>
      <ItemScopeSlot>
        <!--            // 在父组件的模板中通过`v-slot:default="slotProps"`获取到子组件插槽上
        绑定的数据并存放在slotProps对象上，slotProps可以任意命名
        -->
        <template v-slot:default="slotProps">
          <p>{{ slotProps.persons.join('--') }}</p>
        </template>
      </ItemScopeSlot>
      <div style="width:20px"></div>
      <ItemScopeSlot>
        <template v-slot:person="slotPersonProps">
          <p>{{ slotPersonProps.cpnperson }}</p>
        </template>
        <template v-slot:book="slotBookProps">
          <p v-for="i in slotBookProps.cpnbook" :key="i">{{ i }}</p>
        </template>
      </ItemScopeSlot>
      <div style="width:20px"></div>
      <!-- 解构插槽 -->
      <ItemScopeSlot>
        <!--这里采用解构的写法，类比之前`v-slot:person="slotPersonProps"` 相当于从slotPersonProps对象中解构出cpnperson属性 -->
        <template v-slot:person="{cpnperson}">
          <p>{{ cpnperson }}</p>
        </template>
      </ItemScopeSlot>
    </div>
  </div>
</template>

<script>
import Item from "./ItemSlot";
import ItemNameSlot from "./ItemNameSlot";
import ItemScopeSlot from "./ItemScopeSlot";
export default {
  components: { Item, ItemNameSlot, ItemScopeSlot },
  data() {
    return {
      isActive: true,
      activeClass: "active",
      errorClass: "text-danger"
    };
  }
};
</script>

<style lang="less" scoped>
.maincontainer {
  display: flex;
  flex-direction: column;
  .topcontainer {
    height: 334px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .active {
      padding-left: 100px;
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      .item1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .imghead {
          height: 255px;
          width: 153px;
          object-fit: cover;
          object-position: center;
        }
        .itemcontent1 {
          display: flex;
          flex-direction: column;
          
          height: 255px;
        }
      }
      .item2 {
        display: flex;
        flex-direction: column;
        padding-right: 100px;
        justify-content: flex-end;
        .s1 {
          text-align: center;
          color: white;
          background-color: red;
          width: 100px;
          padding-top: 10px;
          padding-bottom: 10px;
          border-radius: 5px;
          display:block
        }
      }
    }
    .topitem2 {
      padding-left: 100px;
      padding-bottom: 2px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
  .spaceline {
    background-color: red;
    height: 2px;
  }
  .topitem3 {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
  }
}
</style>
