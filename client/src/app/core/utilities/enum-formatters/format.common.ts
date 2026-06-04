export type FormatEnumOption = 'sentence' | 'title' | 'upper' | 'lower'

const prepare = function (str: string) {
  return str.replace(/_/g, ' ') // de-snake case
}

// Helper function to compose prepare with a formatter
const withPrepare = (formatter: (s: string) => string) => {
  return (s: string) => formatter(prepare(s))
}

export const enumFormatters = {
  sentence: withPrepare((s: string) => s.charAt(0).toUpperCase() + s.slice(1)),
  title: withPrepare((s: string) =>
    s
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  ),
  upper: withPrepare((s: string) => s.toUpperCase()),
  lower: withPrepare((s: string) => s.toLowerCase()),
  prepare: prepare,
}
