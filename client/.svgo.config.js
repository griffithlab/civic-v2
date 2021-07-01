// configures SVG icon optimization, editing - part of generate-icons workflow
const { extendDefaultPlugins } = require('svgo');
module.exports = {
  plugins: extendDefaultPlugins([
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          '*:fill:(#666|#666666)', // remove fill from single tone icons paths
          '*:*:preserve', // remove xml:space=preserve
          'xmlns', // remove any XML namespace attrs
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
      type: 'perItem',
      params: {
        viewBox: '64 64 896 896', // ng-zorro's updated standard viewBox dimensions
      },
      fn: (ast, params, info) => {
        if (ast.type === 'element' && ast.name === 'svg') {
          ast.attributes = {
            ...ast.attributes,
            viewBox: params.viewBox
          }
        }
        return ast;
      }
    },
  ])
}
