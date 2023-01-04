import { BASE_URL } from '@/assets/constants'

export default function ({ app }) {
  app.$axios.setBaseURL(`${BASE_URL}`)
}