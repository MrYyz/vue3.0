import { createApp } from 'vue'
import {
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Divider,
  Popup,
  Overlay,
  Loading,
  Dialog,
  ContactCard,
  Form,
  AddressEdit,
  AddressList,
  Field,
  CellGroup,
  Cell,
  SwipeCell,
  Icon,
  Stepper,
  Card,
  Checkbox,
  CheckboxGroup,
  Button,
  Swipe,
  SwipeItem,
  PullRefresh,
  List,
  Tab,
  Tabs,
  SubmitBar,
  Toast,
  Skeleton,
  NavBar,
  Image as VanImage,
  Grid, GridItem
} from 'vant'

import App from './App.vue'
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import 'vant/lib/index.css' // 引入全局样式

const app = createApp(App)

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix (url) {
    if (url && url.startsWidth('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

app.use(ActionBar).
use(ActionBarIcon).
use(ActionBarButton).
use(Divider).
use(Popup).
use(Overlay).
use(Loading).
use(Dialog).
use(ContactCard).
use(Form).
use(AddressEdit).
use(AddressList).
use(Field).
use(CellGroup).
use(Cell).
use(SwipeCell).
use(Icon).
use(Stepper).
use(Card).
use(Checkbox).
use(CheckboxGroup).
use(Button).
use(Swipe).
use(SwipeItem).
use(PullRefresh).
use(List).
use(Tab).
use(Tabs).
use(SubmitBar).
use(Toast).
use(Skeleton).
use(NavBar).
use(VanImage).
use(Grid).
use(GridItem)

app.use(router)
app.use(store)

app.mount('#app')