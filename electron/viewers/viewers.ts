import path from 'path'
import fs from 'fs'
import { app } from 'electron'
import viewerLocations from './locations/allLocations'
import { t } from 'typy'

const WINUSER_DIRECTORY = app.getPath('home')

const isProfileFolder = (userDataFolder: any) =>
  userDataFolder === 'Default' ||
  (/Profile/.test(userDataFolder) &&
    !/\./.test(userDataFolder) &&
    userDataFolder !== 'System Profile' &&
    !/Guest/.test(userDataFolder))

export const getViewers = async () => {
  const viewers = []
  for (const location of viewerLocations) {
    const {
      bigIconTemplate,
      smallIconTemplate,
      title,
      subTitle,
      exePaths,
      commandLineArguments,
      userDataFolderPath
    } = location

    for (const exePath of exePaths) {
      try {
        await fs.promises.access(exePath, fs.constants.R_OK)

        const sanitize = (str: string) =>
          str.replace(/\s|\!|\@|\#|\$|\%|\^|\&|\*|\(\)|\_|\:|\;/gi, '-')

        if (userDataFolderPath) {
          const userDataFolderSubs = await fs.promises.readdir(
            path.join(WINUSER_DIRECTORY, userDataFolderPath)
          )

          for (const userDataFolderSub of userDataFolderSubs) {
            if (isProfileFolder(userDataFolderSub)) {
              const preferencesFile = await fs.promises.readFile(
                path.join(
                  WINUSER_DIRECTORY,
                  userDataFolderPath,
                  userDataFolderSub,
                  'Preferences'
                ),
                'utf8'
              )
              const preferences = JSON.parse(preferencesFile)
              const accountName =
                t(preferences, 'profile.name').safeObject ||
                t(preferences, 'account_info.full_name').safeObject ||
                t(preferences, 'account_info[0].edge_account_first_name').safeObject ||
                'Account ?'

              const viewerTitle = accountName.replace(/^./, (s: any) => s.toUpperCase())

              let combinedId = `${sanitize(subTitle)}`
              if (viewerTitle) combinedId += `_${sanitize(viewerTitle)}`
              if (userDataFolderSub) combinedId += `_${sanitize(userDataFolderSub)}`
              combinedId = combinedId.toLocaleLowerCase()

              const viewer = {
                id: `${sanitize(subTitle)}_${sanitize(viewerTitle)}_${sanitize(
                  userDataFolderSub
                )}`.toLocaleLowerCase(),
                exePath: exePath,
                bigIcon: {
                  fromTemplate: bigIconTemplate,
                  fromSrc: t(preferences, 'account_info[0].picture_url').safeObject,
                  fromFile: ''
                },
                smallIcon: {
                  fromTemplate: t(preferences, 'account_info[0].picture_url').safeObject
                    ? ''
                    : smallIconTemplate,
                  fromSrc: '',
                  fromFile: ''
                },
                title: viewerTitle,
                subTitle: subTitle,
                commandLineArguments: `--profile-directory="${userDataFolderSub}"`
              }

              // const pictureUrl = t(preferences, 'account_info[0].picture_url').safeObject

              // if (pictureUrl) (<any>viewer).bigIcon.fromSrc = pictureUrl

              viewers.push(viewer)
            }
          }
        } else {
          let combinedId = `${sanitize(title)}`
          if (subTitle) combinedId += `_${sanitize(subTitle)}`
          if (commandLineArguments) combinedId += `_${sanitize(commandLineArguments)}`
          combinedId = combinedId.toLocaleLowerCase()

          viewers.push({
            id: combinedId,
            exePath: exePath,
            bigIcon: {
              fromTemplate: bigIconTemplate,
              fromSrc: '',
              fromFile: ''
            },
            smallIcon: {
              fromTemplate: smallIconTemplate,
              fromSrc: '',
              fromFile: ''
            },
            title: title,
            subTitle: subTitle,
            commandLineArguments: commandLineArguments
          })
        }
      } catch (e) {
        // electronLog.error(`${exePath}: path does not exist`)
      }
    }
  }
  return viewers
}
