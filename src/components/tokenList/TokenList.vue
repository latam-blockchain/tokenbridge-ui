<template>
  <div class="token-list mt-5 mb-5">
    <h2 id="token-list" class="subtitle">Token list</h2>
    <p class="text-center">
      Ethereum native tokens will transform into r(tokenName). RSK native tokens will transform into
      e(tokenName)
    </p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{{ sharedState.rskConfig.name }}</th>
          <th scope="col">{{ sharedState.ethConfig.name }}</th>
          <th scope="col">minimum</th>
          <th scope="col">maximum</th>
          <th scope="col">daily</th>
          <th scope="col">
            small <br />
            amount
          </th>
          <th scope="col">
            medium <br />
            amount
          </th>
          <th scope="col">
            large <br />
            amount
          </th>
        </tr>
      </thead>
      <tbody>
        <TokenRow
          v-for="token in sharedState.tokens"
          :key="token.token"
          :token="token"
          :types-limits="typesLimits"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import { store } from '@/store.js'
import TokenRow from './TokenRow.vue'

export default {
  name: 'TokenList',
  components: {
    TokenRow,
  },
  props: {
    typesLimits: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sharedState: store.state,
    }
  },
}
</script>
<style scoped>
.token-list .table thead th {
  vertical-align: middle;
}
</style>
