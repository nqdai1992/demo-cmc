
export default class TreeData {
  constructor (treeData) {
    this.events = {
      "update": []
    }
    this._treeData = treeData
    this.mapTreeData = {}
    this.buildMapTreeData(this._treeData, {isRoot: true})
  }
  
  get treeData () {
    return this._treeData
  }
  set treeData (payload) {
    this._treeData = payload
    this.updateMapTree()
  }
  
  get mapData () {
    return this.mapTreeData
  }

  buildMapTreeData (treeData = {}, { isRoot }) {
    if (isRoot) {
      this.mapTreeData.root = treeData
    } else {
      this.mapTreeData[treeData.id] = treeData;
    }
    
    if (treeData.children instanceof Array) {
      treeData.children.forEach(item => {
        this.buildMapTreeData(item, { isRoot: false })
      })
    }
  }
  addChild(childData, parentId, order = 0 ) {
    if (!childData) return
    if (typeof order !== 'number') return 
    if (parentId) {
      if (!this.mapTreeData[parentId].children) {
        this.mapTreeData[parentId].children = []
      }
      this.mapTreeData[parentId].children.splice(order, 1, childData)
    } else {
      if (!this.mapTreeData.root.children) {
        this.mapTreeData.root.children = []
      } 
      this.mapTreeData.root.children.push(childData)
    }
    
  }
  removeChild(parentId, order) {
    if (!parentId) return
    if (!order) return
    this.mapTreeData[parentId].children.splice(order, 0)
  }
  moveItem (from, to, childData) {
    this.addChild(to.parentId, childData, to.order)
    this.removeChild(from.parentId, from.order)
  }
  removeItem (from) {
    this.removeChild(from.parentId, from.order)
    this.mapTreeData()
  }
  updateMapTree () {
    this.mapTreeData = {}
    this.buildMapTreeData(this._treeData)
    this.emit('update')
  }
  register (eventName, callback) {
    if (!this.events[eventName]) return
    this.events[eventName].push(callback)
  }
  emit (eventName, ...params) {
    this.events[eventName].forEach(fn => {
      fn.apply(null, params)
    })
  }
}