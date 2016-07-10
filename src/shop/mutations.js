export const state = {
  profile: {}
}

export const mutations = {
  RECEIVE_PROFILE (state, profile) {
    state.profile = profile
  }
}
