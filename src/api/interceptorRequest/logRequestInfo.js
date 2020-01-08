import VueInstance from '@/main'

export default function (config) {
  VueInstance.$store.commit('SET_REQUEST_STATE', 'loading');
  VueInstance.$store.commit('SET_REQUEST_METHOD', config.method);
  return config
}