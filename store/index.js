// holds your root state
export const state = () => ({
  modal: "none"
})

export const mutations = {
  setModal(state, text) {
    state.modal = text
  }
}
