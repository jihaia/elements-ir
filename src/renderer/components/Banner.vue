<template>
  <div id="banner" class="ms-bgColor-magentaDark noselect ms-fontColor-white">
    <div class="ms-font-xxl" style="margin: 60px 15px 0 15px;">
      identity resolution
    </div>
    <div class="container" style="margin: 0 15px 15px 15px;">
      <div class="ms-font-m ms-Grid-col ms-sm9 ms-normalize">
        D&B Direct Plus API Toolset
      </div>
      <div class="ms-Grid-col ms-sm3 ms-normalize" style="text-align: right">
          <i class="ms-Icon ms-Icon--Lock ms-font-m ms-fontColor-white" style="margin-right: 5px;"></i>
          <i class="ms-Icon ms-Icon--Separator ms-font-m ms-fontColor-white" style="margin-right: 5px;"></i>
          <ou-link @click="$router.push('/')">
            <i class="ms-Icon ms-Icon--Home ms-font-m ms-fontColor-white" style="margin-right: 5px;"></i>
          </ou-link>
          <ou-link @click="$router.push('/settings')">
            <i class="ms-Icon ms-Icon--Settings ms-font-m ms-fontColor-white"></i>
          </ou-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'banner'
  }
</script>

<style>
#banner {
  margin: 0;
  -webkit-app-region: drag;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.subtitle {
  font-size: 16px;
  margin-top: -5px;
}

.container {
  display: flex; /* or inline-flex */
}
</style>
