// holds your root state
export const state = () => ({
  modal: "none",
  skips: 0,
  correctSkip: false,
  ranOut: false,
})

export const mutations = {
  setModal(state, text) {
    state.modal = text
  },
  skip(state) {
    state.skips++
  },
  correct(state) {
    state.correctSkip = true
  },
  ranOut(state) {
    state.ranOut = true
  }
}
