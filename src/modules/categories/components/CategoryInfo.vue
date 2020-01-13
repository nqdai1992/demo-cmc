<template>
  <v-card outlined>
    <v-card-text>
      <v-form ref="form" class="category-info" v-model="valid">
        <v-text-field label="Name" v-model="name" :rules="[rules.required]"></v-text-field>
        <v-select label="Category template" v-model="categoryTemplate" :items="listCategoryTemplate" item-text="label" item-value="value"></v-select>
        <v-text-field label="Picture" v-model="picture"></v-text-field>
        <label>Description</label>
        <AppEditor @change="description = $event"/>
        <v-text-field label="Picture" v-model="picture"></v-text-field>
        <v-select label="Parent category" v-model="parentCategory" :items="processCategories" item-text="pathString" item-value="id" return-object></v-select>
        <v-text-field label="Price range" v-model="priceRange"></v-text-field>
        <v-checkbox v-model="showOnHomePage" label="Show on home page"></v-checkbox>
        <v-checkbox v-model="featuredOnHomePage" label="Show featured products on home page"></v-checkbox>
        <v-checkbox v-model="includeMenu" label="Include in top menu"></v-checkbox>
        <v-checkbox v-model="categoryOnSeachBar" label="Show category on search box"></v-checkbox>
        <v-checkbox v-model="published" label="published"></v-checkbox>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import AppEditor from '@/components/AppEditor'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    AppEditor
  },
  props: {
    initItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    initItem: {
      handler (val) {
        if (val || Object.keys(val).length > 0) {
          this.name = val.name
          this.description = val.description
          this.categoryTemplate = val.categoryTemplate
          this.picture = val.picture
          this.parentCategory = val.parentCategory
          this.priceRange = val.priceRange
          this.showOnHomePage = val.showOnHomePage
          this.featuredOnHomePage = val.featuredOnHomePage
          this.includeMenu = val.includeMenu
          this.categoryOnSeachBar = val.categoryOnSeachBar
          this.published = val.published
        }
      }
    }
  },
  data () {
    return {
      valid: false,
      name: '',
      description: {},
      categoryTemplate: {
        label: 'Products in Grid or Lines',
        value: 'products_in_grid_n_lines'
      },
      picture: '',
      parentCategory: {},
      priceRange: '',
      showOnHomePage: false,
      featuredOnHomePage: false,
      includeMenu: true,
      categoryOnSeachBar: false,
      published: true,
      rules: {
        required: value => !!value || 'Required.'
      },
      listParentCategory: [],
      listCategoryTemplate: [
        {
          label: 'Products in Grid or Lines',
          value: 'products_in_grid_n_lines'
        }
      ]
    }
  },
  created () {
    if (!this.processCategories || this.processCategories.length === 0) {
      this.fetchCategories()
    }
  },
  computed: {
    ...mapGetters('CategoryStore', ['processCategories']),
    payload () {
      let path = [this.name]
      if (this.parentCategory && this.parentCategory.path) {
        path = [...this.parentCategory.path, this.name]
      }
      return {
        valid: this.valid,
        name: this.name,
        description: this.description,
        picture: this.picture,
        parentCategory: this.parentCategory,
        priceRange: this.priceRange,
        showOnHomePage: this.showOnHomePage,
        featuredOnHomePage: this.featuredOnHomePage,
        includeMenu: this.includeMenu,
        categoryOnSeachBar: this.categoryOnSeachBar,
        published: this.published,
        path
      }
    }
  },
  methods: {
    ...mapActions('CategoryStore', ['fetchCategories']),
    validate () {
      return this.$refs['form'].validate()
    }
  }
}
</script>

<style>

</style>