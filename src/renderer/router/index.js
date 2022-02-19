/*
 * @Author: lihu
 * @Date: 2022-02-19 15:25:19
 * @LastEditors: lihu
 * @LastEditTime: 2022-02-19 21:45:13
 * @FilePath: /marktext/src/renderer/router/index.js
 */
import App from '@/pages/app'
import Preference from '@/pages/preference'
import General from '@/prefComponents/general'
import Editor from '@/prefComponents/editor'
import Markdown from '@/prefComponents/markdown'
import SpellChecker from '@/prefComponents/spellchecker'
import Theme from '@/prefComponents/theme'
import Image from '@/prefComponents/image'
import Keybindings from '@/prefComponents/keybindings'
import ImageUploader from '@/prefComponents/imageUploader'

const routes = type => ([{
  path: '/', redirect: type === 'editor' ? '/editor' : '/preference'
}, {
  path: '/editor', component: App
}, {
  path: '/preference',
  component: Preference,
  children: [{
    path: '', component: General
  }, {
    path: 'general', component: General, name: 'general'
  }, {
    path: 'editor', component: Editor, name: 'editor'
  }, {
    path: 'markdown', component: Markdown, name: 'markdown'
  }, {
    path: 'spelling', component: SpellChecker, name: 'spelling'
  }, {
    path: 'theme', component: Theme, name: 'theme'
  }, {
    path: 'image', component: Image, name: 'image'
  }, {
    path: 'keybindings', component: Keybindings, name: 'keybindings'
  }, {
    path: 'imageuploader', component: ImageUploader, name: 'Image Uploader'
  }]
}])

export default routes
