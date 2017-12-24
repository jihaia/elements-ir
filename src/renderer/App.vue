<template>
<div id="app">
  <banner />
  <div class="main-content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  import Banner from './components/Banner'
  export default {
    name: 'elements-ir',
    components: {
      Banner
    }
  }
</script>

<style>
  .noselect {
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

body {
  margin: 0;
  padding: 0;
  background: #fafafa;
}

.main-content {
  padding-top: 145px;
}

.full-width {
  max-width: none !important;
  width: 100%
}
</style>
