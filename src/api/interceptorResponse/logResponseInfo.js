import VueInstance from '@/main'

export default function (response) {
VueInstance.$store.commit('SET_REQUEST_STATE', 'done');
  return response
}