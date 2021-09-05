import { useEffect, useState } from 'react'
import { browserName, browserVersion } from 'react-device-detect'

const outdatedBrowsers = [
  {
    name: 'Chrome',
    latestSupportedVersion: 50
  },
  {
    name: 'Firefox',
    latestSupportedVersion: 45
  },
  {
    name: 'IE',
    latestSupportedVersion: 'not supported'
  },
  {
    name: 'Safari',
    latestSupportedVersion: 10
  }
]

const useDetectOutdatedBrowsers = () => {
  const [isOutdatedBrowser, setIsOutdatedBrowser] = useState(false)

  useEffect(() => {
    if (
      outdatedBrowsers.find(
        browser => browser.name === browserName &&
            (browser.latestSupportedVersion > browserVersion || browser.latestSupportedVersion === 'not supported')
      )
    ) {
      setIsOutdatedBrowser(true)
    }
  }, [setIsOutdatedBrowser])

  return { isOutdatedBrowser }
}

export default useDetectOutdatedBrowsers
