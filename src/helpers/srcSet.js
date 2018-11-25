export default object => {
  const sizes = { x3: '1200w', x2: '768w', x1: '461w' }
  const srcSets = Object.keys(object).map(key => `${object[key]} ${sizes[key]}`)

  return srcSets.join(',')
}
