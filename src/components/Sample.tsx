export const SomeComponent = defineComponent({
  name: "SomeComponent",
  setup(props) {
    const count = ref(0)
    const inc = () => (count.value += 1)

    return () => (
      <div>
        <p>Count is: {count.value}</p>
        <button onClick={inc}>Inc 123</button>
        <br />
        <input v-model={count.value}></input>
      </div>
    )
  },
})
