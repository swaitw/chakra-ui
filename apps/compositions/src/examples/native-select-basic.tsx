import {
  NativeSelectField,
  NativeSelectRoot,
} from "compositions/ui/native-select"

export const NativeSelectBasic = () => {
  return (
    <NativeSelectRoot size="sm" width="240px">
      <NativeSelectField placeholder="Select option">
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="svelte">Svelte</option>
      </NativeSelectField>
    </NativeSelectRoot>
  )
}
