export function xmlToJson(xml: string): string {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xml, 'application/xml')
  const json = xmlNodeToJson(xmlDoc.documentElement)
  return JSON.stringify(json, null, 2)
}

function xmlNodeToJson(node: Element): any {
  const obj: any = {}
  if (node.hasAttributes()) {
    Array.from(node.attributes).forEach((attr) => {
      obj[`@${attr.name}`] = attr.value
    })
  }
  Array.from(node.children).forEach((child) => {
    const childJson = xmlNodeToJson(child)
    if (obj[child.tagName]) {
      if (!Array.isArray(obj[child.tagName])) {
        obj[child.tagName] = [obj[child.tagName]]
      }
      obj[child.tagName].push(childJson)
    } else {
      obj[child.tagName] = childJson
    }
  })
  if (!node.children.length && node.textContent) {
    obj['#text'] = node.textContent.trim()
  }
  return obj
}
