// configures SVG icon optimization, part of generate-icons workflow
const { extendDefaultPlugins } = require('svgo');
module.exports = {
  plugins: extendDefaultPlugins([
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          '*:fill:#666', // remove fill from single tone icons paths
          '*:*:preserve', // remove xml:space=preserve
          'xmlns'
        ]
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            focusable: false // ensure icon SVG won't be selectable, clickable
          }
        ]
      }
    },
    {
      name: 'modifyViewBox',
      type: 'perItem', // 'perItem', 'perItemReverse' or 'full'
      params: {
        viewBox: '64 64 896 896', // ng-zorro's updated standard viewBox dimensions
      },
      fn: (ast, params) => {
        if(ast.type === 'element' && ast.name === 'svg') {
          if(ast.attributes.viewBox) {
            ast.attributes = {
              ...ast.attributes,
              viewBox: params.viewBox
            }
          }
        }
        return ast;
      }
    },
  ])
}
