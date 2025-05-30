import path from 'path'
import { app } from 'electron'
import regedit from 'regedit'
import electronLog from './log'

// That path need for browserParser. info: https://github.com/ironSource/node-regedit#a-note-about-electron
const vbsDirectory = path.join(
  path.dirname(app.getPath('exe')),
  './resources/regedit/vbs'
)
regedit.setExternalVBSLocation(vbsDirectory)

export const getAppProgId = (store: any) => {
  const pathHttp =
    'HKLM\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppModel\\PackageRepository\\Extensions\\windows.protocol\\http'

  regedit.list(pathHttp, (err: any, result: any) => {
    if (err) electronLog.error(err)
    result[pathHttp].keys.forEach((item: any) => {
      regedit.list(`${pathHttp}\\${item}`, (err: any, result: any) => {
        if (err) electronLog.error(err)
        const name = Object.keys(result[`${pathHttp}\\${item}`].values)[0]
        if (name.includes(`AccountSurfer_${store.get('appVersion')}`)) {
          store.set('progId', item)
          electronLog.info('App name ', name)
          electronLog.info(`Exact ProgId app found: ${item}`)
        }
      })
    })
  })
}

export const getIsDefaultBrowser = (store: any) => {
  try {
    const pathDefaultHttp =
      'HKCU\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice'

    regedit.list(pathDefaultHttp, (err: any, result: any) => {
      if (err) electronLog.error(err)
      const progId = store.get('progId')
      const values = result[pathDefaultHttp]?.values
      let isDefaultBrowser = false

      if (values?.ProgId !== undefined) {
        isDefaultBrowser = Boolean(values?.ProgId?.value === progId)
      }

      if (values?.ProgID !== undefined) {
        isDefaultBrowser = Boolean(values?.ProgID?.value === progId)
      }

      if (values?.PROGID !== undefined) {
        isDefaultBrowser = Boolean(values?.PROGID?.value === progId)
      }

      store.set({ isDefaultBrowser })
    })
  } catch (e) {
    electronLog.error(e)
  }
}
