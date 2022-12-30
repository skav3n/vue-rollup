import { openBlock as c, createElementBlock as _, renderSlot as r } from "vue";
const u = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, a = {}, d = { class: "test-button" };
function l(t, e) {
  return c(), _("button", d, [
    r(t.$slots, "default", {}, void 0, !0)
  ]);
}
const f = /* @__PURE__ */ u(a, [["render", l], ["__scopeId", "data-v-9769f254"]]), i = {
  install: (t, e) => {
    t.component("TestButton", f);
  }
};
export {
  i as default
};
