/*!
 * vue-alphanav v1.1.0
 * (c) x. Villamuera
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  data: function data() {
    return {
      actionUrl: "",
      selectedIndex: null,
      //null or 0 is A is default
      selectedAlpha: null,
      selectedAlphaMin: null,
      alphaList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    };
  },
  props: {
    direction: {
      type: String,
      "default": "horizontal"
    },
    //horizontal or vertical
    clearLinkText: {
      type: String,
      "default": "clr"
    },
    showClear: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    alphanavClick: function alphanavClick(item, index) {
      this.selectedIndex = index;
      this.selectedAlpha = item;
      this.selectedAlphaMin = item.toLowerCase().trim();
      this.$emit("selected", {
        value: item
      });
    },
    unselect: function unselect() {
      this.selectedIndex = null;
      this.selectedAlpha = null;
      this.selectedAlphaMin = null;
      this.$emit("clear");
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('ul', {
    "class": _vm.direction + ' alphanav'
  }, [_vm._l(_vm.alphaList, function (item, index) {
    return _c('li', {
      key: item
    }, [_c('a', {
      "class": _vm.selectedIndex === index ? 'active' : '',
      on: {
        "click": function click($event) {
          return _vm.alphanavClick(item, index, $event);
        }
      }
    }, [_vm._v(_vm._s(item))])]);
  }), _vm._v(" "), _vm.showClear ? _c('li', [_c('a', {
    staticClass: "alphanav-clear-link",
    on: {
      "click": _vm.unselect
    }
  }, [_vm._v(_vm._s(_vm.clearLinkText))])]) : _vm._e()], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a718f9e8_0", {
    source: ".vertical[data-v-a718f9e8]{flex-flow:nowrap;display:flex;flex-wrap:nowrap;flex-direction:column}.horizontal[data-v-a718f9e8]{flex-flow:nowrap;display:flex;flex-wrap:nowrap;flex-direction:row}.alphanav[data-v-a718f9e8]{border-radius:2px;background-color:#fcfcfc;margin:14px 0;padding:4px 0;justify-content:space-evenly;list-style-type:none}.alphanav li[data-v-a718f9e8]{margin:auto;padding:0;flex-shrink:2;flex-basis:auto}.alphanav li a[data-v-a718f9e8]{margin:auto;padding:2px 4px}.alphanav li a[data-v-a718f9e8],.alphanav li a[data-v-a718f9e8]:after,.alphanav li a[data-v-a718f9e8]:before{transition:all .5s}.alphanav li a.active[data-v-a718f9e8],.alphanav li a[data-v-a718f9e8]:hover{color:#fff;background-color:#666;border-radius:5px;margin-top:-4px}.alphanav li a[data-v-a718f9e8]:hover:after{-webkit-animation:circle 1.5s ease-in forwards}.alphanav-clear-link[data-v-a718f9e8]{color:#aaa}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-a718f9e8";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var Alphanav = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Alphanav', Alphanav);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component

exports.default = Alphanav;
exports.install = install;
