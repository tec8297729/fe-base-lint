import type { Reducer } from 'redux'
import type { Effect } from 'dva'
import { stringify } from 'querystring'
import { router } from 'umi'

import { fakeAccountLogin } from '@/services/login'
import { setAuthority } from '@/utils/authority'
import { getPageQuery } from '@/utils/utils'

export type StateType = {
  status?: 'ok' | 'error'
  type?: string
  currentAuthority?: 'user' | 'guest' | 'admin'
}

export type LoginModelType = {
  namespace: string
  state: StateType
  effects: {
    login: Effect
    logout: Effect
  }
  reducers: {
    changeLoginStatus: Reducer<StateType>
  }
}

const Model: LoginModelType = {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload)
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      })
      // Login successfully
      if (response.status === 'ok') {
        const urlParams = new URL(window.location.href)
        const params = getPageQuery()
        let { redirect } = params as { redirect: string }
        if (redirect) {
          const redirectUrlParams = new URL(redirect)
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length)
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1)
            }
          } else {
            window.location.href = '/'
            return
          }
        }
        router.replace(redirect || '/')
      }
    },

    logout() {
      const { redirect } = getPageQuery()
      // Note: There may be security issues, please note
      if (window.location.pathname !== '/user/login' && !redirect) {
        router.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority)
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      }
    },
  },
}

export default Model
