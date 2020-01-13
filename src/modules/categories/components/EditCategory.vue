<template>
  <AppPage title="Edit Category">
    <template v-slot:page__actions>
      <v-btn class="mr-3" color="secondary" small @click="$router.push('/categories')">
        <v-icon>keyboard_backspace</v-icon>
        Back to caltegories list
      </v-btn>
       <v-btn class="mr-3" text color="error" small @click="removeCategory">
        <v-icon small class="mr-2">delete</v-icon>
        <span>Remove</span>
      </v-btn>
      <v-btn color="success" small @click="updateCategory">
        <v-icon small class="mr-2">save</v-icon>
        <span>Save</span>
      </v-btn>
    </template>
    <template v-slot:page__content>
      <CategoryInfo :init-item="processCategory" ref="category-info"/>
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
      treeView: {},
      originCategory: {}
    }
  },
  async created () {
    this.fetchTreeCategory()
    await this.fetchCategory({
      categoryId: this.$route.params.id
    })
    this.originCategory = JSON.parse(JSON.stringify(this.processCategory))
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
  computed: {
    ...mapGetters('CategoryStore', [
      'processCategory',
      'fullTreeData'
    ])
  },
  methods: {
    ...mapActions('CategoryStore', [
      'fetchCategory',
      'modifyCategory',
      'fetchTreeCategory',
      'modifyTreeCategories'
    ]),
    async updateCategory () {
      if (!this.$refs['category-info'].validate()) return
      let payload = this.$refs['category-info'].payload
      try {
        let res = await this.modifyCategory({
          categoryId: this.$route.params.id,
          payload
        })
        this.treeView.moveItem(
          {
            parentId: this.originCategory.parentCategory.id,
          },
          {
            parentId: res.data.parentCategory.id
          },
          res.data
        )
        console.log('e', this.fullTreeData)
        let newTreeData = Object.assign({}, {
          root: this.fullTreeData
        }, {
          root: this.treeView.treeData
        })
        console.log('f', newTreeData)
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
    },
    removeCategory () {
      console.log('Remove category')
    }
  }
}
</script>

<style>

</style>