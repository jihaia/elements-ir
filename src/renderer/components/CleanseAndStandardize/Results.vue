<template>
  <div>
    <div role="list" class="ms-List">
        <div class="ms-List-surface" style="background: #fff">
        <div class="ms-List-page">
          <div class="ms-List-cell" @click="goto">
            <div style="border-bottom: 1px solid #eaeaea; border-top: 1px solid #eaeaea;">
              <div class="ms-ListGhostingExample-itemCell" style="border-left: solid 3px red;">
              <div class="ms-Image ms-ListGhostingExample-itemImage">
                <img class="ms-Image-image ms-Image-image--portrait ms-Image-image--cover is-loaded is-fadeIn css-53" src="//placehold.it/246x246"></div>
                <div class="ms-ListGhostingExample-itemContent">
                  <div class="ms-ListGhostingExample-itemName">
                    Apple - US Enterprise 101K
                  </div>
                  <div class="ms-ListGhostingExample-itemIndex">
                    Contains 101,008 rows
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ms-List-cell">
            <div style="border-bottom: 1px solid #eaeaea;">
              <div class="ms-ListGhostingExample-itemCell" style="border-left: solid 3px orange;">
              <div class="ms-Image ms-ListGhostingExample-itemImage">
                <img class="ms-Image-image ms-Image-image--portrait ms-Image-image--cover is-loaded is-fadeIn css-53" src="//placehold.it/246x246"></div>
                <div class="ms-ListGhostingExample-itemContent">
                  <div class="ms-ListGhostingExample-itemName">
                    Apple - CAN ETT
                  </div>
                  <div class="ms-ListGhostingExample-itemIndex">
                    Contains 29,491 rows
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cleanse-and-standardize-results',
    methods: {
      goto () {
        console.log('opening')
      }
    }
  }
</script>

<style>
.ms-ListGhostingExample-itemCell {
    min-height: 50px;
    padding: 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.ms-ListGhostingExample-itemCell {
    position: relative;
}

.ms-ListGhostingExample-itemCell {
    outline: transparent;
}

.ms-ListGhostingExample-itemImage {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width:40px;
    height:40px
}

.ms-ListGhostingExample-itemImage .ms-Image-image--portrait {
  height: 32px;
  border-radius: 50%
}


.ms-ListGhostingExample-itemContent {
    margin-left: 10px;
}

.ms-ListGhostingExample-itemName {
    font-size: 18px;
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ms-ListGhostingExample-itemIndex {
  font-size: 12px;
}


.ms-ListGhostingExample-itemCell:hover {
    background: #eff6fc;
    cursor: pointer;
}
</style>
