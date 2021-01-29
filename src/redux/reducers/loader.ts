import {
  LoaderState,
  LoaderActions,
  SHOW_LOADER,
  HIDE_LOADER,
} from '../../types'

export default function countries(
  state: LoaderState = {
    loading: false,
  },
  action: LoaderActions
): LoaderState {
  switch (action.type) {
  case SHOW_LOADER:
    return { ...state, loading: true }
  case HIDE_LOADER:
    return { ...state, loading: false }

  default:
    return state
  }
}
