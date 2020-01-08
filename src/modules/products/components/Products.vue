<template>
  <AppPage title="Products">
      <template v-slot:page__search>
        <v-text-field
          v-model="search"
          label="Search"
          solo
          append-icon="search"
        ></v-text-field>
      </template>

      <template v-slot:page__actions>
        <div class="d-flex">
          <v-btn class="mr-2" color="success" small>
            <v-icon small>add</v-icon>
            <span>Add</span>
          </v-btn>
          <v-btn @click="removeHandle" color="error" :disabled="selected.length === 0" small>
            <v-icon small>delete</v-icon>
            <span>Remove </span>
          </v-btn>
        </div>
      </template>

      <template v-slot:page__content>
        <v-data-table
          :search="search"
          v-model="selected"
          :headers="headers"
          :items="processedProducts"
          item-key="id"
          show-select
          :options.sync="options"
          :loading="loading"
          class="elevation-0"
        >
          <template v-slot:item.picture="{ item }">
            <img width="75" height="75" :src="item.picture" alt="picture product" />
          </template>

          <template v-slot:item.published="{ item }">
            <div>
              <v-icon v-if="item.published" color="green">done</v-icon>
              <v-icon v-else color="red">clear</v-icon>
            </div>
          </template>
        </v-data-table>
      </template>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage'
import { mapActions, mapGetters } from 'vuex'
import { sleep } from '@/utils'
export default {
  components: {
    AppPage
  },
  data () {
    return {
      search: '',
      selected: [],
      headers: [
        {
          text: 'Picture',
          align: 'left',
          sortable: false,
          value: 'picture',
        },
        { text: 'Product name', value: 'productName' },
        { text: 'SKU', value: 'SKU' },
        { text: 'Price', value: 'price' },
        { text: 'Stock quantity', value: 'stockQuantity' },
        { text: 'Product type', value: 'productType' },
        { text: 'Published', value: 'published' }
      ],
      totalProducts: 0,
      loading: false,
      options: {}
    }
  },
  computed: {
    ...mapGetters('ProductStore', ['processedProducts'])
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('ProductStore', [
      'fetchProducts',
      'removeProduct',
      'addProduct'
    ]),
    removeHandle () {
      this.$dialog.open({
        title: "Do you want remove this items ?",
        state: 'error',
        content: `List item ids include: ${this.selected.map(item => item.productName).join(', ')}`,
        callback: async () => {
          for (let i = 0; i < this.selected.length; i++) {
            await this.removeProduct({
              productId: this.selected[i].id
            })
            await this.fetchProducts()
            await sleep(500)
          }
        }
      })
    }
  }
}
</script>

<style>

</style>