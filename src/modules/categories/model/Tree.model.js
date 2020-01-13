
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
      console.log('a', order, childData, parentId)
      this.mapTreeData[parentId].children.splice(order, 0, childData)
    } else {
      if (!this.mapTreeData.root.children) {
        this.mapTreeData.root.children = []
      } 
      console.log('b', order, childData, parentId)
      this.mapTreeData.root.children.push(childData)
    }
    
  }
  removeChild(parentId, childData) {
    if (!childData) return
    if (!childData.id) return
    
    if (parentId) {
      this.mapTreeData[parentId].children = this.mapTreeData[parentId].children.filter(item => item.id !== childData.id)
    } else {
      this.mapTreeData.root.children = this.mapTreeData.root.children.filter(item => item.id !== childData.id)
    }
  }
  updateItem (payload) {
    this.mapTreeData[payload.id] = Object.assign(this.mapTreeData[payload.id], payload)
  }
  moveItem (from, to, childData) {
    if (from.parentId === to.parentId) {
      return this.updateItem(childData)
    }
    let payload = JSON.parse(JSON.stringify(childData))
    this.addChild(payload, to.parentId, to.order)
    this.removeChild(from.parentId, payload)
    this.updateMapTree()
  }
  updateMapTree () {
    this.mapTreeData = {}
    this.buildMapTreeData(this._treeData, { isRoot: false })
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