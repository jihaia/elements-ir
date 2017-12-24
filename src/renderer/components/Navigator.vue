<template>
  <div style="margin: 15px;">
    <div class="ms-font-xl" style="margin-bottom: 15px;">Home</div>
    <ou-button @click="goto('cleanseAndStandardize')" type='compound' description='The cleanse and standardize feature returns the details of the standardized values used for industry needs and effective identification' class="full-width">Cleanse and standardize</ou-button>
    <ou-button @click="goto('cleanseMatch')" type='compound' description='Identity Resolution returns the best matches for given criteria using match algorithms' class="full-width">Cleanse and match</ou-button>
    <ou-button @click="goto('extendedMatch')" type='compound' description='Match and Append identifies the best match from the provided information and appends the requested data product to the response' class="full-width">Match and append</ou-button>
  </div>
</template>

<script>
  export default {
    name: 'navigator',
    methods: {
      goto (target) {
        this.$router.push({ name: target })
      }
    }
  }
</script>

<style>
.full-width {
  max-width: none !important;
  width: 100%
}
</style>
