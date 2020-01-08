<template>
  <v-card outlined>
    <v-card-text>
      <v-form ref="form" class="product-info" v-model="valid">
        <v-select label="Product Type" v-model="productType" :items="listProductType" item-text="label" item-value="value"></v-select>
        <v-checkbox v-model="visibleIndividual" label="Visible individual"></v-checkbox>
        <v-select label="Product template" v-model="productTemplate" :items="listProductTemplate" item-text="label" item-value="value"></v-select>
        <v-text-field :rules="[rules.required, rules.min]" v-model="productName" label="Product name"></v-text-field>
        <v-textarea v-model="shortDescription" label="Short description"></v-textarea>

        <v-text-field v-model="flag"  label="Flag"></v-text-field>
        <v-textarea v-model="adminComment" label="Admin comment"></v-textarea>
        <v-select label="Vendor"  v-model="vendor" :items="listVendor" item-text="label" item-value="value"></v-select>
        <v-checkbox v-model="showOnHomePage" label="Show on home page"></v-checkbox>
        <v-text-field v-if="showOnHomePage" style="width: 100px" v-model="order" label="Order" type="number"></v-text-field>
        <v-text-field v-model="gtin" label="GTIN"></v-text-field>
        
        <div class="d-flex">
          <AppDatePicker label="Start date" @change="startDate = $event"/>
          <AppDatePicker label="End date" @change="endDate = $event"/>
        </div>
        
        <v-checkbox v-model="published" label="Published"></v-checkbox>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import AppDatePicker from '@/components/AppDatePicker'
export default {
  components: {
    AppDatePicker
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
        this.convertInitItem(val)
      },
      immediate: true
    }
  },
  data () {
    return {
      valid: false,
      productType: { label: 'Simple', value: 'simple' },
      visibleIndividual: true,
      productTemplate: { label: 'Simple product', value: 'simple'},
      productName: '',
      shortDescription: '',
      fullDescription: '',
      flag: '',
      adminComment: '',
      vendor: { label: 'Vendor 1', value: 'vendor1' },
      showOnHomePage: false,
      order: 0,
      gtin: '',
      startDate: null,
      endDate: null,
      published: true,
      listProductType: [
        {
          label: 'Simple',
          value: 'simple'
        },
        {
          label: 'Grouped',
          value: 'grouped'
        },
        {
          label: 'Reservation',
          value: 'reservation'
        },
        {
          label: 'Bundled product',
          value: 'bundledProduct'
        },
        {
          label: 'Auction',
          value: 'auction'
        }
      ],
      listProductTemplate: [
        {
          label: 'Simple product',
          value: 'simple'
        },
        {
          label: 'Grouped',
          value: 'grouped'
        }
      ],
      listVendor: [
        { label: 'Vendor 1', value: 'vendor1' },
        { label: 'Vendor 2', value: 'vendor2'}
      ],
      rules: {
        required: value => !!value || 'Required.',
      }
    }
  },
  computed: {
    payload () {
      return {
        productName: this.productName,
        productType: this.productType,
        productTemplate: this.productTemplate,
        visibleIndividual: this.visibleIndividual,
        shortDescription: this.shortDescription,
        fullDescription: this.fullDescription,
        flag: this.flag,
        adminComment: this.adminComment,
        vendor: this.vendor,
        showOnHomePage: this.showOnHomePage,
        order: this.order,
        gtin: this.gtin,
        startDate: this.startDate,
        endDate: this.endDate,
        published: this.published
      }
    }
  },
  methods: {
    convertInitItem (item) {
      if (!item || Object.keys(item).length === 0) return 
      this.productName = item.productName,
      this.productType = item.productType,
      this.productTemplate = item.productTemplate,
      this.visibleIndividual = item.visibleIndividual,
      this.shortDescription = item.shortDescription,
      this.fullDescription = item.fullDescription,
      this.flag = item.flag,
      this.adminComment = item.adminComment,
      this.vendor = item.vendor.value,
      this.showOnHomePage = item.showOnHomePage,
      this.order = item.order,
      this.gtin = item.gtin,
      this.startDate = item.startDate,
      this.endDate = item.endDate,
      this.published = item.published
    },
    validate () {
      return this.$refs['form'].validate()
    }
  }
}
</script>

<style>

</style>