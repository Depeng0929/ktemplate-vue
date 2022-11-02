import packageJson from '../../package.json'
import type { ITokenInfo } from '~/api/user/type'

export const storage_token = useStorage<ITokenInfo>(`${packageJson.name}-token`, null)
