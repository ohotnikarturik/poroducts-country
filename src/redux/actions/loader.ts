import { SHOW_LOADER, HIDE_LOADER, LoaderActions } from '../../types'

export const showLoader = (): LoaderActions => {
  return {
    type: SHOW_LOADER,
  }
}

export const hideLoader = (): LoaderActions => {
  return {
    type: HIDE_LOADER,
  }
}
