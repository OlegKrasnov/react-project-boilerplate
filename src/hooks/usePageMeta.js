import { useEffect } from 'react'
import { usePagesContextValue } from '@contexts/PagesContext'

const titleElement = document.head.querySelector('title')
const descriptionMetaElement = document.head.querySelector('meta[name="description"]')
const keywordsMetaElement = document.head.querySelector('meta[name="keywords"]')
const prerenderStatusCode = document.head.querySelector('meta[name="prerender-status-code"]')

const updatePageMeta = ({ description, keywords, statusCode, title }) => {
  titleElement.innerHTML = title

  if (description) {
    descriptionMetaElement.setAttribute('content', description)
    titleElement.parentElement.insertBefore(descriptionMetaElement, titleElement)
  } else if (descriptionMetaElement.parentElement) {
    descriptionMetaElement.parentElement.removeChild(descriptionMetaElement)
  }

  if (keywords) {
    keywordsMetaElement.setAttribute('content', keywords)
    titleElement.parentElement.insertBefore(keywordsMetaElement, titleElement)
  } else if (keywordsMetaElement.parentElement) {
    keywordsMetaElement.parentElement.removeChild(keywordsMetaElement)
  }

  prerenderStatusCode.setAttribute('content', statusCode ? statusCode : 200)
}

export default ({ pageCode }) => {
  const page = usePagesContextValue(pageCode).find(data => data.code === pageCode)

  useEffect(() => {
    if (page) {
      const { seo: meta = {} } = page
      meta.statusCode = pageCode === 'not-found' ? 404 : 200

      if (meta) {
        updatePageMeta(meta)
      }
    }
  }, [pageCode, page])
}
