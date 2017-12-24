<template>
  <div class="ms-slideLeftIn40" style="margin: 15px;">
    <ou-button @click="$router.push('/')" style="margin-bottom: 20px;" type="hero" icon="Back" class="nav-button">Cleanse and standardize</ou-button>
    <ou-pivot size='large'>
      <ou-pivot-item label='Criteria' style="padding-bottom: 40px">
        <ou-text-field label='Name' />
        <ou-text-field label='Country code' />
        <div v-if="showMore">
          <ou-text-field label='Street address line 1' />
          <ou-text-field label='Street address line 2' />
          <ou-text-field label='City' />
          <ou-text-field label='State' />
        </div>
        <ou-link @click="showMore = !showMore">{{ showLabel }}</ou-link>
        <div style="margin-top: 10px">
          <ou-button type="primary">Submit</ou-button>
        </div>

      </ou-pivot-item>
      <ou-pivot-item label='Results'>
        <results />
      </ou-pivot-item>
    </ou-pivot>
  </div>
</template>

<script>
  import Results from './CleanseAndStandardize/Results.vue'

  export default {
    name: 'cleanse-and-standardize',
    components: {
      Results
    },
    data () {
      return {
        showMore: false
      }
    },
    computed: {
      showLabel () {
        return this.showMore === false ? 'More criteria' : 'Less criteria'
      }
    }
  }
</script>

<style>
.ms-Button.ms-Button--hero.nav-button > span.ms-Button-icon > i.ms-Icon {
  border: none;
  font-size: 18px;
  line-height: 21px;
  color: #1a1a1a;
}
.ms-Button.ms-Button--hero.nav-button > span.ms-Button-label {
  color: #1a1a1a;
}
</style>
