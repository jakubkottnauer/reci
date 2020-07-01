import { MarkdownFieldPlugin } from 'react-tinacms-editor'

export const onClientEntry = () => {
  window.tinacms.plugins.add(MarkdownFieldPlugin)
}
