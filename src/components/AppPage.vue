<template>
  <div class="app__page page">
    <div class="page__header">
      <div class="page__title title">
        {{title}}
      </div>
      <div class="page__actions">
        <slot name="page__actions" />
      </div>
    </div>

    <div class="page__search">
      <slot name="page__search" />
    </div>

    <div class="page__content">
      <slot name="page__content" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppPage',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>

</style>