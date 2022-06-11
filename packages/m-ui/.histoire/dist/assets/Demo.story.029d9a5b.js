import { a as openBlock, b as createElementBlock, t as toDisplayString, r as ref, R as reactive, q as resolveComponent, j as createBlock, k as withCtx, l as createVNode } from "./vendor.0f2c2782.js";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "Demo",
  props: ["msg"],
  emits: ["click"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const __returned__ = { props, emit, ref, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("click"))
  }, toDisplayString($setup.props.msg), 1);
}
_sfc_main$1.__file = "demo/Demo.vue";
var Demo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/yangshuaiwei/WebstormProjects/m-ui/packages/m-ui/demo/Demo.vue"]]);
const _sfc_main = {
  __name: "Demo.story",
  setup(__props, { expose }) {
    expose();
    const hh = () => {
      alert(111);
    };
    const __returned__ = { hh, Demo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    group: "comp",
    title: "button"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "demo1" }, {
        default: withCtx(() => [
          createVNode($setup["Demo"], { msg: "hello world" })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "demo2" }, {
        default: withCtx(() => [
          createVNode($setup["Demo"], {
            msg: "hello vue",
            onClick: $setup.hh
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "demo3" }, {
        default: withCtx(() => [
          createVNode($setup["Demo"], { msg: "hello vite" })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "demo/Demo.story.vue";
var Demo_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangshuaiwei/WebstormProjects/m-ui/packages/m-ui/demo/Demo.story.vue"]]);
export { Demo_story as default };
