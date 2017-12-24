<template>
  <div style="margin: 15px;">
    <div class="ms-font-xl" style="margin-bottom: 15px;">Settings</div>
    <ou-pivot>
      <ou-pivot-item label='Profile' style="padding-bottom: 40px">
        <ou-text-field label='First name' v-model="firstNameField" />
        <ou-text-field label='Last name' v-model="lastNameField" />
        <ou-text-field label='Mobile number' v-model="mobileNumberField" />
        <ou-button @click="saveCredentials" type="primary" style="margin-top: 15px;">Save</ou-button>
      </ou-pivot-item>
      <ou-pivot-item label='Credentials'>
        <ou-text-field label='Name' />
        <ou-text-field label='Key' />
        <ou-text-field label='Secret' />
        <ou-button @click="" type="primary" style="margin-top: 15px;">Save</ou-button>
      </ou-pivot-item>
    </ou-pivot>
  </div>
</template>

<script>
  import Storage from '../../main/Storage'

  var storage = new Storage({ configName: 'settings' })

  export default {
    name: 'settings',
    data () {
      return {
        profile: {
          firstName: undefined,
          lastName: undefined,
          mobileNumber: undefined
        }
      }
    },
    computed: {
      firstNameField: {
        set: function (val) {
          this.profile.firstName = val
        },
        get: function () {
          return this.profile.firstName
        }
      },
      lastNameField: {
        set: function (val) {
          this.profile.lastName = val
        },
        get: function () {
          return this.profile.lastName
        }
      },
      mobileNumberField: {
        set: function (val) {
          this.profile.mobileNumber = val
        },
        get: function () {
          return this.profile.mobileNumber
        }
      }
    },
    methods: {
      saveCredentials () {
        console.log('saving', this.profile)
        storage.set('profile', this.profile)
      }
    },
    mounted () {
      var prof = { ...storage.get('profile') }
      console.log(123, prof)

      if (prof === undefined) {
        storage.set('profile', {
          firstName: '',
          lastName: '',
          mobileNumber: ''
        })
      }

      this.profile = prof
      console.log(prof)
    }
  }
</script>

<style>
</style>
