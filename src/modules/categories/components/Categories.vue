<template>
  <AppPage title="Categories">
    <template v-slot:page__actions>
      <v-btn small color="success" @click="$router.push('/add-category')">
        <v-icon>add</v-icon>
        <span>Create new category</span>
      </v-btn>
    </template>
    <template v-slot:page__content>
      <v-card outlined>
        <v-card-text>
          <v-treeview :items="treeDataWithoutRoot"></v-treeview>
        </v-card-text>
      </v-card>
    </template>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    AppPage
  },
  computed: {
    ...mapGetters('CategoryStore', ['processCategories', 'treeDataWithoutRoot']),
  },
  created () {
    this.fetchCategories()
    this.fetchTreeCategory()
  },
  methods: {
    ...mapActions('CategoryStore',[
      'fetchCategories',
      'fetchTreeCategory'
    ])
  }
}
</script>

<style>

</style>