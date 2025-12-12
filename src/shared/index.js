export { apiClient, retryRequest } from './api/client'
export { API_BASE_URL, IS_DEMO_MODE } from './api/config'

export { store } from './store/store'
export { useAppDispatch, useAppSelector, useAuth, usePolicies, useClients } from './store/hooks'
export { logout } from './store/slices/authSlice'
export { fetchPolicies } from './store/slices/policiesSlice'
export { fetchClients } from './store/slices/clientSlice'

export { TextInput } from './ui/kit/Input/TextInput'
export { AuthCheckBox } from './ui/kit/Checkbox/AuthCheckBox'

export { queryClient } from './lib/hooks/useQueryClient'
export { scrollToElement } from './lib/utils/scrollToElement'

export { default as appStyles } from './css/app.module.css'