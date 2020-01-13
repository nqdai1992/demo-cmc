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
          <!-- <v-treeview :items="treeDataWithoutRoot" hoverable>
            <template v-slot:append="{ item, open }">
              <v-btn @click="editCategories(item.id)" small outlined color="primary">
                <v-icon class="mr-2" small>edit</v-icon>
                <span>Edit</span>
              </v-btn>
            </template>
          </v-treeview> -->
          <v-list-item v-for="item in processCategories" :key="item.id">
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="`/edit-category/${item.id}`">{{item.pathString}}</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
    ]),
    editCategories (id) {
      if (!id) return 
      this.$router.push(`/edit-category/${id}`)
    }
  }
}
</script>

<style>

</style>