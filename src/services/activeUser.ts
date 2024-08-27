import { ref } from "vue"

type User = {id: Number}

export const activeUser = ref<User>()