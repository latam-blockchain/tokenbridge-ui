<template>
  <div class="transaction-list mt-5 mb-5">
    <h2 id="account-transactions" class="subtitle">Account transactions</h2>
    <p class="text-center">
      Please note that all transactions listed here will not appear if you use another device
    </p>

    <div v-if="!sharedState.isConnected">
      <h5 class="subtitle">No active account, please connect your wallet</h5>
    </div>
    <div v-else-if="transactions.length === 0">
      <h5 class="subtitle">No transactions found for the active account</h5>
    </div>
    <div v-else>
      <table class="table">
        <caption>
          <div class="d-flex justify-content-between align-items-center">
            <span>
              Page {{ currentPage }} of {{ totalPages }} | Showing {{ recordsOnPage }} of
              {{ totalTransactions }} records
            </span>
            <select
              v-model="limitSelect"
              class="form-select px-4 py-2 border rounded-2 bg-light fw-bold"
              aria-label="Number of records on page"
              @change="changeLimit($event)"
            >
              <option :value="10" selected>10</option>
              <option :value="20">20</option>
              <option :value="30">30</option>
            </select>
          </div>
        </caption>
        <thead>
          <tr>
            <th scope="col">Action</th>
            <th scope="col" width="12%">From</th>
            <th scope="col">Sender</th>
            <th scope="col">Txn hash</th>
            <th scope="col">Block number</th>
            <th scope="col" width="13%">Amount</th>
            <th scope="col" width="12%">To</th>
            <th scope="col">Receiver</th>
            <th scope="col" width="15%">Status</th>
          </tr>
        </thead>
        <tbody id="eth-rsk-tbody">
          <TransactionRow
            v-for="transaction in transactions"
            :key="transaction.transactionHash"
            :transaction="transaction"
            :types-limits="typesLimits"
            :rsk-confirmations="rskConfirmations"
            :eth-confirmations="ethConfirmations"
            :rsk-block-number="rskBlockNumber"
            :eth-block-number="ethBlockNumber"
            :rsk-fed-members="rskFedMembers"
            :eth-fed-members="ethFedMembers"
          />
        </tbody>
      </table>
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
          <button
            id="txn-previous"
            type="button"
            class="btn btn-outline-primary"
            :disabled="currentPage === 1"
            @click="previousPage"
          >
            &lt; previous
          </button>
          <button
            id="txn-next"
            type="button"
            class="btn btn-outline-primary"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            next >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store.js'
import TransactionRow from './TransactionRow.vue'

export default {
  name: 'TransactionList',
  components: {
    TransactionRow,
  },
  props: {
    typesLimits: {
      type: Array,
      required: true,
    },
    rskConfirmations: {
      type: Object,
      required: true,
    },
    ethConfirmations: {
      type: Object,
      required: true,
    },
    rskFedMembers: {
      type: Array,
      required: true,
    },
    ethFedMembers: {
      type: Array,
      required: true,
    },
    transactions: {
      type: Array,
      required: true,
    },
    rskBlockNumber: {
      type: Number,
      required: true,
    },
    ethBlockNumber: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 10,
    },
    totalTransactions: {
      type: Number,
      default: 0,
    },
  },
  emits: ['changePagination', 'changeLimit'],
  data() {
    return {
      sharedState: store.state,
      offset: 0,
      limitSelect: 10,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalTransactions / this.limit)
    },
    currentPage() {
      return Math.round(this.offset / this.limit) + 1
    },
    recordsOnPage() {
      return this.transactions.length
    },
  },
  methods: {
    changeLimit(event) {
      this.$emit('changeLimit', parseInt(event.target.value, 10))
    },
    nextPage() {
      this.offset += this.limit
      if (this.offset > this.totalTransactions) {
        this.offset -= this.limit
      }
      this.$emit('changePagination', { limit: this.limit, offset: this.offset })
    },
    previousPage() {
      this.offset -= this.limit
      if (this.offset <= 0) {
        this.offset = 0
      }
      this.$emit('changePagination', { limit: this.limit, offset: this.offset })
    },
  },
}
</script>
