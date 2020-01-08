<template>
  <AppPage title="Edit product">
    <template v-slot:page__content>
      <ProductInfo />
    </template>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage'
import ProductInfo from './ProductInfo'
export default {
    components: {
        AppPage,
        ProductInfo
    }
}
</script>

<style>

</style>