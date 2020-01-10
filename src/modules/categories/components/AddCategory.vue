<template>
  <AppPage title="Add category">
    <template v-slot:page__actions>
      <v-btn class="mr-3" color="secondary" small @click="$router.push('/categories')">
        <v-icon>keyboard_backspace</v-icon>
        Back to caltegories list
      </v-btn>
      <v-btn color="success" small @click="createCategory">Create new category</v-btn>
    </template>
    <template v-slot:page__content>
      <CategoryInfo ref="category-info"/>
    </template>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage'
import CategoryInfo from './CategoryInfo'
import { mapActions, mapGetters } from 'vuex'
import TreeModel from '../model/Tree.model'

export default {
  components: {
    AppPage,
    CategoryInfo
  },
  data () {
    return {
      treeView: {}
    }
  },
  computed: {
    ...mapGetters('CategoryStore',[
      'fullTreeData',
    ])
  },
  created () {
    this.fetchTreeCategory()
  },
  watch: {
    fullTreeData: {
      handler (val) {
        if (val) {
          this.treeView = new TreeModel(val)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('CategoryStore',[
      'addCategory',
      'fetchTreeCategory',
      'modifyTreeCategories'
    ]),
    async createCategory () {
      if (!this.$refs['category-info'].validate()) return
      let payload = this.$refs['category-info'].payload
      try {
        let res = await this.addCategory({
          payload
        })
        this.treeView.addChild(res.data, res.data.parentCategory.id)
        let newTreeData = Object.assign({}, this.fullTreeData, {
          root: this.treeView.treeData
        })
        delete newTreeData.id
        await this.modifyTreeCategories({
          payload: newTreeData
        })
        this.$snackbar.open({
          state: 'success',
          content: 'Create new category successfully'
        })
      } catch (err) {
        this.$snackbar.open({
          state: 'error',
          content: err
        })
      }
      
    }
  }
}
</script>

<style>

</style>